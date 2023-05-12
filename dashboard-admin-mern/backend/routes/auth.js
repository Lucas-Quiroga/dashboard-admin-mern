const express = require("express");
const api = express.Router();

const {
  registerUser,
  loginUser,
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

api.post("/login", loginUser);

api.get("/logout", logout);

module.exports = api;
