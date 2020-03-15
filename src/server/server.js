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

app.use(express.static(__dirname + '/public'));

const port = 3000;
app.listen(port, () => console.log('App listening on port ' + port));