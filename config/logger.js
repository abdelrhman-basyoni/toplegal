const winston = require('winston');

const jsonLogFileFormat = winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    winston.format.prettyPrint(),
  );
const logger = winston.createLogger({
    level: 'debug',
    format: jsonLogFileFormat,
    transports: [
      //
      // - this is only for testing purposes in production u should link winston to a loggin service
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `debug` or less to `console`
      // 
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.Console(),
    ],
  });

  module.exports = logger;