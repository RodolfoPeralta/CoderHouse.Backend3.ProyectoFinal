const mongoose = require("mongoose");
const logger = require("../../utils/Logger");

async function mongoConnection(db) {
    try {
        await mongoose.connect(db);
        logger.info(`Connection with MongoDB established on '${db}'`);
    }
    catch(error) {
        logger.fatal(`Error when trying to connect with MongoDB. Message: ${error}`);
    }
}

module.exports = mongoConnection;