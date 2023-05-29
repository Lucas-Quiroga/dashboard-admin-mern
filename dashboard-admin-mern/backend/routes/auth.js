const express = require("express");
const api = express.Router();
require("../passportConfig");

const {
  registerUser,
  logout,
  loginUser,
} = require("./../controllers/usersController");

api.post("/register", registerUser);

api.post("/login", loginUser);

api.post("/logout", logout);

module.exports = api;
