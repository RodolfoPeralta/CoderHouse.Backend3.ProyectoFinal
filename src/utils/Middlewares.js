const logger = require("../utils/Logger");

const apiLoggerMiddleware = (request, response, next) => {

    response.on("finish", () => {
        const { method, originalUrl } = request;
        const { statusCode } = response;

        const custom = response.locals.message || "";
        const base = `${method} ${originalUrl} - Status code: ${statusCode}`;

        const fullMessage = custom ? `${base} - Message: ${custom}` : base;

        if (statusCode >= 500) {
            logger.fatal(fullMessage);
        } 
        else if (statusCode >= 400) {
            logger.error(fullMessage);
        } 
        else if (statusCode >= 300) {
            logger.warning(fullMessage);
        } 
        else {
            logger.http(fullMessage);
        }
    }); 

    next();
}

module.exports = apiLoggerMiddleware;