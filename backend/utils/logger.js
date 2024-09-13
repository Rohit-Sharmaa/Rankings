import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;

const ConsoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message }) => {
    return `${level}: ${message}`;
  })
);

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), colorize(), json()),
  transports: [
    new transports.Console({
      format: ConsoleLogFormat,
    }),
    new transports.File({ filename: "app.log" }),
  ],
});
export default logger;
