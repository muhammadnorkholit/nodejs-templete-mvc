
    const express = require("express");
    const router = express.Router();
    const controller = require("../controllers/usersController.js");


    router.get("/users",controller.index);
    router.get("/users/create",controller.create);
    router.post("/users",controller.store);
    router.get("/users/:id",controller.show);
    router.put("/users/:id",controller.update);
    router.delete("/users/:id",controller.delete);

    module.exports = router;
