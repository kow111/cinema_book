const express = require("express");
const {
  getFilms,
  postCreateFilm,
  putUpdateFilm,
} = require("../controllers/film.controller");
const RouterAPI = express.Router();

RouterAPI.get("/", getFilms);
RouterAPI.post("/", postCreateFilm);
RouterAPI.put("/:id", putUpdateFilm);

module.exports = RouterAPI;
