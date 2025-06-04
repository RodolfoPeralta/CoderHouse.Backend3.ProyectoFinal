const app = require("./src/app");
const logger = require("./src/utils/Logger");
require("dotenv").config();

// Port configuration
const PORT = process.env.PORT || 8080;

// Server init
app.listen(PORT, () => {
    logger.info(`Server listening on http://localhost:${PORT}`);
});