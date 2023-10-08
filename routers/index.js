const express = require("express");
const baseRouter = express.Router();

const Question = require("./Questionrouter");

baseRouter.use("", Question);

const Comment = require("./CommentRouter.js");
baseRouter.use("", Comment);

const Vote = require("./VoteRouter.js");
baseRouter.use("", Vote);

const User = require("./UserRouter.js");
baseRouter.use("", User);

const Tag = require("./TagRouter.js");
baseRouter.use("", Tag);


 const Answer = require("./AnswerRouter.js");
baseRouter.use("", Answer); 
 module.exports = baseRouter;