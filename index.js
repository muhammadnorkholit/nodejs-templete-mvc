"use strict";

const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const baseRouter = require("./routers");
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your React.js app's URL
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", baseRouter);

let port = process.env.PORT || 5000;
// run server
app.listen(port, () => {
  console.log("Server running on port " + port);
});
