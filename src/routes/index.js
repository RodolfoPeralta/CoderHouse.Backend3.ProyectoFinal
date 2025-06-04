const express = require("express");
const router = express.Router();
const boardRouter = require("./boardRouter");
const taskRouter = require("./taskRouter");
const userRouter = require("./userRouter");
const sessionRouter = require("./sessionRouter");
const mockRouter = require("./mockRouter");

router.use("/boards", boardRouter);
router.use("/tasks", taskRouter);
router.use("/users", userRouter);
router.use("/sessions", sessionRouter);
router.use("/mocks", mockRouter);

module.exports = router;