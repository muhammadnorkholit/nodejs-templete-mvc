
    const express = require("express");
    const router = express.Router();
    const controller = require("../controllers/AnswerController.js");


    router.get("/Answer",controller.index);
    router.get("/Answer/create",controller.create);
    router.post("/Answer",controller.store);
    router.get("/Answer/:id",controller.show);
    router.put("/Answer/:id",controller.update);
    router.delete("/Answer/:id",controller.delete);

    module.exports = router;
