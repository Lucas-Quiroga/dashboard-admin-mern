const express = require("express");
const api = express.Router();

const {
  registerUser,
  loginUser,
  logout,
  showRegistrationPage,
  showLoginPage,
} = require("./../controllers/usersController");

api.get("/register", showRegistrationPage);

api.post("/register", registerUser);

api.get("/login", showLoginPage);

api.post("/login", loginUser);

api.get("/logout", logout);

module.exports = api;
