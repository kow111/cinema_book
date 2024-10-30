const express = require("express");
const {
  getShowtimes,
  postCreateShowtime,
  putUpdateShowtime,
} = require("../controllers/showtime.controller");
const RouterAPI = express.Router();

RouterAPI.get("/", getShowtimes);
RouterAPI.post("/", postCreateShowtime);
RouterAPI.put("/:id", putUpdateShowtime);

module.exports = RouterAPI;
