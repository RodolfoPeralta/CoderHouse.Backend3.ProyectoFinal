const express = require("express");
const MockManagerController = require("../controllers/MockManagerController");
const router = express.Router();

router.get("/mockingusers", async (request, response) => MockManagerController.mockUsers(request, response));
router.get("/mockingtasks", async (request, response) => MockManagerController.mockTasks(request, response));
router.post("/generateData", async (request, response) => MockManagerController.generateData(request, response));

module.exports = router;