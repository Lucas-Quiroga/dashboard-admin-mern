const express = require("express");
const passport = require("passport");
const api = express.Router();

const {
  registerUser,
  logout,
  showRegistrationPage,
  showLoginPage,
} = require("./../controllers/usersController");

api.get("/register", (req, res) => {
  try {
    res.render("register");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

api.post("/register", registerUser);

api.get("/login", showLoginPage);

api.post("/login", (req, res, next) => {
  passport.authenticate("login", (err, user, info) => {
    console.log("usuario recibido:", user);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/login/inicio");
    });
  })(req, res, next);
});

api.get("/logout", logout);

module.exports = api;
