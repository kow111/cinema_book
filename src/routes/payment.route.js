const express = require("express");
const {
  getPayments,
  postCreatePayment,
  putUpdatePayment,
  getPaymentByShowTimeId,
} = require("../controllers/payment.controller");
const RouterAPI = express.Router();

RouterAPI.get("/", getPayments);
RouterAPI.get("/:show_time_id/showtime", getPaymentByShowTimeId);
RouterAPI.post("/", postCreatePayment);
RouterAPI.put("/:id", putUpdatePayment);

module.exports = RouterAPI;
