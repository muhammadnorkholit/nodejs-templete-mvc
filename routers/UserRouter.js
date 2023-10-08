
    const express = require("express");
    const router = express.Router();
    const controller = require("../controllers/UserController.js");


    router.get("/User",controller.index);
    router.get("/User/create",controller.create);
    router.post("/User",controller.store);
    router.get("/User/:id",controller.show);
    router.put("/User/:id",controller.update);
    router.delete("/User/:id",controller.delete);

    module.exports = router;
