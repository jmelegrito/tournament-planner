/*  EXPRESS SETUP  */
const express = require('express');
const app = express();
const models = require('./models');
const session = require("express-session");
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session")
const cookieParser = require("cookie-parser")
const Sequelize = require("sequelize")

var pbkdf2 = require('pbkdf2');
var salt = "XZoLh12Teu";

function encryptionPassword(password) {
    var key = pbkdf2.pbkdf2Sync(
        password, salt, 36000, 256, 'sha256'
    );
    var hash = key.toString('hex');

    return hash;
}

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

const port = 3000;
app.listen(port, () => console.log('App listening on port ' + port));

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

app.use(express.static(__dirname + '/public'));
/* PASSPORT LOCAL AUTHENTICATION */

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    {usernameField: "userName", passwordField: "password"},
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
          res.redirect("/login");
        } else {
          console.log("no open session")
          res.redirect("/login");
        }
      }
    // function (req, res) {
    //     res.render('/home');
    // }
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
                // res.render("/home");
                res.redirect("/login")
                console.log("The user registered.")
            })
        });
});

app.get('/sign-out', function (req, res) {
    if (req.isAuthenticated()) {
      console.log("The user is logging out.");
      req.logOut();
      res.redirect("/login");
    } else {
      console.log("no open session")
      res.redirect("/login");
    }
  });