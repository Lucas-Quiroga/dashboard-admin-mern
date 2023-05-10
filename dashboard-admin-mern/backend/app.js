const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("./models/User");
// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/auth");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
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

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Usuario no encontrado" });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          return done(null, false, { message: "Contraseña incorrecta" });
        }
        return done(null, user, { message: "usuario registrado" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

app.use("/", authRouter);

module.exports = app;
