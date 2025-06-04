const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserManagerController.js");

router.get("/", async (request, response) => UserController.getAllUsers(request, response));
router.get("/:uid", async (request, response) => UserController.getUserById(request, response));
router.put("/:uid", async (request, response) => UserController.updateUserById(request, response));
router.delete("/:uid", async (request, response) => UserController.deleteUserById(request, response));

module.exports = router;