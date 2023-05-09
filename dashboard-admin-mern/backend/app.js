const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/auth");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de la sesión
app.use(
  session({
    secret: "mi-secreto",
    resave: false,
    saveUninitialized: false,
  })
);

// Configuración de flash y passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRouter);

module.exports = app;
