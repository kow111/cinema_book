require("dotenv").config();
const express = require("express");
const cors = require("cors");
const testRouter = require("./routes/test.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", testRouter);

module.exports = app;
