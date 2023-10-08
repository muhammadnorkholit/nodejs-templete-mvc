
    const express = require("express");
    const router = express.Router();
    const controller = require("../controllers/CommentController.js");


    router.get("/Comment",controller.index);
    router.get("/Comment/create",controller.create);
    router.post("/Comment",controller.store);
    router.get("/Comment/:id",controller.show);
    router.put("/Comment/:id",controller.update);
    router.delete("/Comment/:id",controller.delete);

    module.exports = router;
