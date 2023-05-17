const express = require("express");
const passport = require("passport");
const api = express.Router();

const {
  registerUser,
  logout,
  loginUser,
  showRegistrationPage,
  showLoginPage,
} = require("./../controllers/usersController");

//routes
api.get("/register", showRegistrationPage);

api.post("/register", registerUser);

api.get("/login", showLoginPage);

api.post("/login", loginUser);

api.get("/logout", logout);

module.exports = api;
