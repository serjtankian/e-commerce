const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const serverConfig = require("./config/serverConfig.json");
const db = require('./db')

app.use(express.json());

//sessions
app.use(
  session({
    secret: "omdbProject",
    resave: true,
    saveUninitialized: true,
  })
);

//localStrategy
require("./config/localStrategy");

//passportInit
app.use(passport.initialize());
app.use(passport.session());

// err middleware
app.use(function (err, res) {
  res.sendStatus(500);
});

//app listen
db.sync().then(()=> {
  app.listen(serverConfig.port, () => {
    console.log("Serven listening on port " + serverConfig.port);
  });
  
})
