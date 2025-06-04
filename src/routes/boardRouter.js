const express = require("express");
const BoardController = require("../controllers/BoardManagerController.js");
const router = express.Router();
const JwtUtils = require("../utils/Jwt");

router.get("/", async (request, response) => await BoardController.getAllBoards(request, response));
router.get("/:bid", async (request, response) => await BoardController.getBoardById(request, response));
router.post("/", async (request, response) => await BoardController.createBoard(request, response));
router.post("/:bid/task", JwtUtils.authorizeToken, async (request, response) => await BoardController.addTaskToBoard(request, response));
router.put("/:bid", JwtUtils.authorizeToken, async (request, response) => await BoardController.updateBoardById(request, response));
router.delete("/:bid", async (request, response) => await BoardController.deleteBoardById(request, response));

module.exports = router;