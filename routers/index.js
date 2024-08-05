const express = require("express");
const baseRouter = express.Router();

// test

const users = require("./usersRouter.js");
baseRouter.use("", users);
module.exports = baseRouter;
