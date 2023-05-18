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

// function isAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   req.flash("error_msg", "Not Authorized.");
//   res.redirect("/login");
// }

//routes
api.get("/register", showRegistrationPage);

api.post("/register", registerUser);

api.get("/login", showLoginPage);

api.post("/login", loginUser);

api.get("/login", (req, res) => {
  res.send("Hola usuario registrado");
});

api.get("/logout", logout);

module.exports = api;
