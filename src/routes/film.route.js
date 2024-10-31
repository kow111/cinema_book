const express = require("express");
const upload = require("../config/multer.config");
const {
  getFilms,
  postCreateFilm,
  putUpdateFilm,
} = require("../controllers/film.controller");
const RouterAPI = express.Router();

RouterAPI.get("/", getFilms);
RouterAPI.post("/", upload.single("image"), postCreateFilm);
RouterAPI.put("/:id", upload.single("image"), putUpdateFilm);

module.exports = RouterAPI;
