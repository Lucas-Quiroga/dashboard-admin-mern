const express = require("express");
const passport = require("passport");
const api = express.Router();
require("../passportConfig");

const {
  registerUser,
  logout,
  loginUser,
  showRegistrationPage,
  showLoginPage,
} = require("./../controllers/usersController");

api.post("/register", registerUser);

api.post("/login", loginUser);

api.post("/logout", logout);

module.exports = api;
