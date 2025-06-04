const express = require("express");
const TaskController = require("../controllers/TaskManagerController.js");
const JwtUtils = require("../utils/Jwt.js");
const router = express.Router();

router.get("/", JwtUtils.authorizeToken, async (request, response) => await TaskController.getAllTasks(request, response));
router.get("/:tid", JwtUtils.authorizeToken, async (request, response) => await TaskController.getTaskById(request, response));
router.put("/:tid", JwtUtils.authorizeToken, async (request, response) => await TaskController.updateTaskById(request, response));
router.delete("/:tid", JwtUtils.authorizeToken, async (request, response) => await TaskController.deleteTaskById(request, response));

module.exports = router;