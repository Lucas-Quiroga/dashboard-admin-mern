const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("./../models/User");
const router = express.Router();

//funcion para registrar al Usuario (método POST)
async function registerUser(req, res) {
  const { email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    req.flash("error_msg", "Las contraseñas no coinciden");
    return res.redirect("/register");
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      req.flash("error_msg", "El correo electrónico ya está registrado");
      return res.redirect("/register");
    }
    if (!password || typeof password !== "string") {
      throw new Error("Contraseña inválida");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new User({ email, password: hash });
    await newUser.save();
    req.flash("success_msg", "Te has registrado correctamente");
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    req.flash("error_msg", "Ha ocurrido un error al registrar el usuario");
    res.redirect("/register?error=" + encodeURIComponent(error.message));
  }
}

//funcion mostrar el render de la pagina de registro (método GET)
async function showRegistrationPage(req, res) {
  try {
    res.render("register");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

//funcion para logear al Usuario (método POST)
async function loginUser(req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("error_msg", "Usuario o contraseña incorrectos");
      return res.redirect("/login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      req.flash("success_msg", "Has iniciado sesión correctamente");
      return res.redirect("/");
    });
  })(req, res, next);
}

//funcion mostrar el render de la pagina de login (método GET)
async function showLoginPage(req, res) {
  try {
    res.render("login");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

//funcion para deslogear al Usuario (método GET)
async function logout(req, res) {
  try {
    req.logout();
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al cerrar sesión" });
  }
}

module.exports = {
  registerUser,
  showRegistrationPage,
  loginUser,
  showLoginPage,
  logout,
};
