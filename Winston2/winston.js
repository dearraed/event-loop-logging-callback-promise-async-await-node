const winston = require("winston");
// Logger configuration
const logConfiguration = {
  transports: [
    new winston.transports.Console({
      level: "verbose",
    }),
    new winston.transports.File({
      level: "error",
      level: "debug",
      level: "warn",
      level: "verbose",
      level: "info",
      level: "silly",
    // create a directory 'logs' that will have the file name 'example.log' with the logs  
      filename: "./logs/example.log",
    }),
  ],
};
//Create logging configurations
const logger = winston.createLogger(logConfiguration);
// Log some messages
logger.silly("Trace message, Winston!");
logger.debug("Debug message, Winston!");
logger.verbose("A bit more info, Winston!");
logger.info("Hello, Winston!");
logger.warn("Heads up, Winston!");
logger.error("Danger, Winston!");