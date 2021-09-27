var winston = require("winston");
const dateformat = require("dateformat");
require("winston-daily-rotate-file");

module.exports = class Log {
  constructor() {
    let APILg = new winston.transports.DailyRotateFile({
      filename: "./APILog/Log-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxSize: "2m",
      maxFiles: "3d",
      frequency: "1m",
    });
    this.APILogger = winston.createLogger({
      transports: [APILg],
    });
  }

  APILog(requestID, latency, apiname, request, response) {
    const dt = dateformat(new Date(), "yyyy-mm-dd dd-mm-yyyy HH:MM:ss l")
    const lg={logtime:dt, api:apiname,requestID:requestID,latency:latency, request:request, response:response} 
    this.APILogger.info(lg);
  }
};
