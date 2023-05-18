const express = require("express");
const api = express.Router();
const { authenticated } = require("./../helpers/authenticated");

const {
  renderIndex,
  renderLoginInicio,
} = require("../controllers/indexController");

api.get("/", renderIndex);
api.get("/login/inicio", authenticated, renderLoginInicio);

module.exports = api;
