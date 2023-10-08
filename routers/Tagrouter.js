
    const express = require("express");
    const router = express.Router();
    const controller = require("../controllers/TagController.js");


    router.get("/Tag",controller.index);
    router.get("/Tag/create",controller.create);
    router.post("/Tag",controller.store);
    router.get("/Tag/:id",controller.show);
    router.put("/Tag/:id",controller.update);
    router.delete("/Tag/:id",controller.delete);

    module.exports = router;
