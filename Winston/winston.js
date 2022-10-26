const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;




const logger = createLogger({
  level: 'info',
    format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
     new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'verbose' }),
    new transports.File({ filename: 'error2.log', level: 'warn' }),
    
     
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
//if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.File({ filename: 'combined.log' }));
//}

module.exports = logger;