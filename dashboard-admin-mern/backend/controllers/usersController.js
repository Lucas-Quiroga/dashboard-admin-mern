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

module.exports = {
  registerUser,
};
