const express = require("express");
const router = express.Router();
const controller = require("../controllers/QuestionController");

router.get("/Question", controller.index);
router.get("/Question/create", controller.create);
router.post("/Question", controller.store);
router.get("/Question/:id", controller.show);
router.put("/Question/:id", controller.update);
router.delete("/Question/:id", controller.delete);

module.exports = router;
