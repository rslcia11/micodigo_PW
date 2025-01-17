const express = require("express");
const router = express.Router();
const autoController = require("../controllers/auto.controller");

router.get("/", autoController.getAutos);
router.post("/", autoController.createAuto);
router.put("/:id", autoController.updateAuto);
router.delete("/:id", autoController.deleteAuto);

module.exports = router;