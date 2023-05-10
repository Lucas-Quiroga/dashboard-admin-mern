const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("./../models/User");
const api = express.Router();
const { registerUser } = require("./../controllers/usersController");

api.get("/login", (req, res) => {
  res.render("login");
});

api.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

api.get("/register", (req, res) => {
  res.render("register");
});

api.post("/register", registerUser);

api.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = api;
