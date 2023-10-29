const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player.controller");

router.post("/addPlayer", playerController.addPlayer);
router.get("/getPlayer", playerController.getPlayer);
router.get("/getPlayers", playerController.getPlayers);

module.exports = router;
