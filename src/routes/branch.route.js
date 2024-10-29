const express = require("express");
const { postCreateBranch } = require("../controllers/branch.controller");
const RouterAPI = express.Router();

RouterAPI.post("/", postCreateBranch);

module.exports = RouterAPI;
