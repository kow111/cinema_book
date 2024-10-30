const express = require("express");
const {
  getDiscounts,
  postCreateDiscount,
  putUpdateDiscount,
} = require("../controllers/discount.controller");
const RouterAPI = express.Router();

RouterAPI.get("/", getDiscounts);
RouterAPI.post("/", postCreateDiscount);
RouterAPI.put("/:id", putUpdateDiscount);

module.exports = RouterAPI;
