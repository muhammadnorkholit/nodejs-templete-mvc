"use strict";

const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const baseRouter = require("./routers");

app.set(express.json());
app.set(cors());

app.use("/api", baseRouter);

let port = process.env.PORT || 5000;
// run server
app.listen(port, () => {
  console.log("Server running on port " + port);
});
