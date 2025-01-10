const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/db");

const todoRoute = require("./routes/todoRoutes");
const app = express();

require("dotenv").config();

const port = process.env.port || 4000;

connect();

app.use(express.json());

app.use("/api", todoRoute);

app.listen(port, () => {
  console.log(`we are listening at ${port}`);
});
