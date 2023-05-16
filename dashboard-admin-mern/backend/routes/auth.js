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
api.post(
  "/login",
  passport.authenticate("login", {
    failureRedirect: "/login",
    successRedirect: "/login/inicio",
  })
);

api.get("/login/inicio", (req, res) => {
  res.send("hola loquito");
});

api.get("/logout", logout);

module.exports = api;
