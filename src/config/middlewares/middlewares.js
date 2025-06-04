const express = require("express");
const apiLoggerMiddleware = require("../../utils/Middlewares");

function configureMiddlewares(app) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(apiLoggerMiddleware);
}

module.exports = configureMiddlewares;