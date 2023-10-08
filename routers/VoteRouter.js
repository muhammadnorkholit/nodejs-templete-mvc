
    const express = require("express");
    const router = express.Router();
    const controller = require("../controllers/VoteController.js");


    router.get("/Vote",controller.index);
    router.get("/Vote/create",controller.create);
    router.post("/Vote",controller.store);
    router.get("/Vote/:id",controller.show);
    router.put("/Vote/:id",controller.update);
    router.delete("/Vote/:id",controller.delete);

    module.exports = router;
