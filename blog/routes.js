const express = require("express");
const blogController = require("./controller");
const router = new express.Router();

router.get("/blog", blogController.getAll);
router.get("/blog/:id", blogController.getOne);
router.post("/blog", blogController.create);
router.put("/blog/:id", blogController.update);
router.delete("/blog/:id", blogController.remove);

module.exports = router;
