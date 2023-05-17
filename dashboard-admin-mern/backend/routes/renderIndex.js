const express = require("express");
const api = express.Router();

const {
  renderIndex,
  renderLoginInicio,
} = require("../controllers/indexController");

api.get("/", renderIndex);
api.get("login/inicio", renderLoginInicio);

module.exports = api;
