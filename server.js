/*  EXPRESS SETUP  */
const express = require('express');
const app = express();
const models = require('./models');
const session = require("express-session");
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session")
const cookieParser = require("cookie-parser")
const Sequelize = require("sequelize")
const cors = require('cors')
const path = require('path')

var pbkdf2 = require('pbkdf2');
var salt = "XZoLh12Teu";

function encryptionPassword(password) {
    var key = pbkdf2.pbkdf2Sync(
        password, salt, 36000, 256, 'sha256'
    );
    var hash = key.toString('hex');

    return hash;
}

// var corsOptions = {
//     origin: "http://localhost:4200"
// }

// app.use(cors(corsOptions));

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["itsakey"]
}));

app.use(cookieParser());

app.use(session({
    secret: "cats",
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(__dirname + '/dist'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname, '/dist/index.html'))
});

app.listen(process.env.PORT || 8080);

/*  PASSPORT SETUP  */

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    models.users.findOne({ where: { id: id } }).then(function (user) {
        cb(null, user);
    });
});

/* PASSPORT LOCAL AUTHENTICATION */

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    { usernameField: "userName", passwordField: "password" },
    function (userName, password, done) {
        models.users.findOne({
            where: {
                userName: userName
            }
        }).then(function (user) {
            if (!user) {
                console.log("no user")
                return done(null, false);
            }

            if (user.password != encryptionPassword(password)) {
                console.log("wrong password")
                return done(null, false);
            }
            console.log("user logged in")
            return done(null, user);
        }).catch(function (err) {
            return done(err);
        });
    }
));

/* SIGNIN SIGNUP */

app.post('/sign-in',
    passport.authenticate('local'), function (req, res) {
        if (req.isAuthenticated()) {
            console.log("The user is logged in.");
            models.users.findOne({
                where: {
                    userName: req.body.userName
                }
            }).then(user => {
                loggedInUser = {
                    userName: user.userName,
                    password: user.password,
                    userType: user.userType,
                    userId: user.id
                }
                res.send(loggedInUser);
            })

        } else {
            console.log("no open session")
            res.send("/login");
        }
    }
);

app.post("/sign-up", function (req, res) {
    console.log(req.body)
    models.users.create({
        userName: req.body.userName,
        emailAddress: req.body.emailAddress,
        password: encryptionPassword(req.body.password),
        userType: req.body.userType,
    })
        .then(function (user) {
            req.login(user, function () {
                console.log(user.id)
                data = {
                    username: req.body.userName,
                    password: encryptionPassword(req.body.password),
                    userType: req.body.userType,
                    userId: user.id
                }
                res.send(data)
                console.log("The user registered.")
            })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Something bad is happening in Oz!"
            })
        });
});

app.get('/sign-out', function (req, res) {
    if (req.isAuthenticated()) {
        //   console.log("The user is logging out.");
        req.logOut();
        res.send("/login");
    } else {
        //   console.log("no open session")
        res.send("/login");
    }
});

/* TOURNAMENT SERVICE */

// Grab all tournaments
app.get('/getall', function (req, res) {
    models.tournaments.findAll({}).then(function (data) {
        console.log("in getall")
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something bad is happening in Oz!"
        })
    })
})

//Grab all tournaments according to organizer
app.get('/tourney/:id', function (req, res) {
    models.tournaments.findAll({
        where: {
            organizer: req.params.id
        }
    }).then(function (data) {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something bad is happening in Oz!"
        })
    })
})


// View selected tournament
app.get('/:id', function (req, res) {
    models.tournaments.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        console.log("in view tourney")
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something bad is happening in Oz!"
        })
    })
})

//View participants of a specific tournament

app.get('/participantList/:id', function (req, res) {
    models.users.findAll({
        where: {
            tournamentJoined: req.params.id
        }
    }).then(function (data) {
        console.log("in participant list")
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something bad is happening in Oz!"
        })
    })
})


// Create tournament
app.post('/', function (req, res) {
    models.tournaments.create({
        name: req.body.name,
        description: req.body.description,
        contact: req.body.contact,
        type: req.body.type,
        organizer: req.body.organizer
    }).then(function (data) {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something bad is happening in Oz!"
        })
    })
})

//Update tournament
app.put('/:id', function (req, res) {
    models.tournaments.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(function (data) {
        console.log("in update")
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something bad is happening in Oz!"
        })
    })
})

app.put('/join/:id', function (req, res) {
    models.users.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(function (data) {
        console.log("in join")
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something bad is happening in Oz!"
        })
    })
})


//Delete tournament
app.delete('/:id', function (req, res) {
    models.tournaments.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something bad is happening in Oz!"
        })
    })
})

