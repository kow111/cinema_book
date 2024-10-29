require("dotenv").config();
const express = require("express");
const cors = require("cors");
const testRouter = require("./routes/test.route");
const branchRouter = require("./routes/branch.route");
const categoryRouter = require("./routes/category.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", testRouter);
app.use("/api/v1/branch", branchRouter);
app.use("/api/v1/category", categoryRouter);

module.exports = app;
