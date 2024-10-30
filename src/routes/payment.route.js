const express = require("express");
const {
  getPayments,
  postCreatePayment,
  putUpdatePayment,
} = require("../controllers/payment.controller");
const RouterAPI = express.Router();

RouterAPI.get("/", getPayments);
RouterAPI.post("/", postCreatePayment);
RouterAPI.put("/:id", putUpdatePayment);

module.exports = RouterAPI;
