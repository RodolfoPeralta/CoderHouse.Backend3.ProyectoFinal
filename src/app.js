const express = require("express");
const apiRouter = require("./routes/index");
const mongoConnection = require("./config/mongo/mongo");
const configureMiddlewares = require("./config/middlewares/middlewares");
require("dotenv").config();

const app = express();

const mongoPath = process.env.MONGO;

// MongoDB connection
mongoConnection(mongoPath);

// Middlewares
configureMiddlewares(app);

// Routes
app.use("/api", apiRouter);

module.exports = app;