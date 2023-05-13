const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("./../models/User");
const router = express.Router();

//funcion para registrar al Usuario (método POST)
async function registerUser(req, res) {
  console.log(req.body);
  const { email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Las contraseñas no coinciden" });
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está registrado" });
    }
    if (!password || typeof password !== "string") {
      throw new Error("Contraseña inválida");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new User({ email, password: hash });
    await newUser.save();
    return res.status(200).json({ message: "Te has registrado correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Ha ocurrido un error al registrar el usuario",
      error: error.message,
    });
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
  passport.authenticate("local", async function (err, user, info) {
    const { email, password } = req.body;
    if (!email || typeof email !== "string") {
      return res.status(400).json({
        success: false,
        message: "Debes proporcionar un correo electrónico válido.",
      });
    }

    try {
      const user = await User.findOne({ email });

      if (!user) {
        console.log("Usuario no encontrado");
        return res.status(401).json({
          success: false,
          message: "Usuario o contraseña incorrectos",
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          message: "Usuario o contraseña incorrectos.",
        });
      }

      req.logIn(user, function (err) {
        if (err) {
          console.log("Error interno del servidor:", err);
          return res
            .status(500)
            .json({ success: false, message: "Error interno del servidor" });
        }
        console.log("Inicio de sesión exitoso");
        return res.status(200).json({
          success: true,
          message: "Has iniciado sesión correctamente",
          User: user,
        });
      });
    } catch (error) {
      console.log("Error interno del servidor:", error);
      return res
        .status(500)
        .json({ success: false, message: "Error interno del servidor" });
    }
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
