import winston from "winston"

const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} - ${level.toUpperCase()}: ${message}`
    })
  ),
  transports: [new winston.transports.File({ filename: "error.log" })]
})

const errorHandler = (error, req, res, next) => {
  if (error.status && error.status < 500) {
    return res.status(error.status).json({ message: error.message })
  } else {
    logger.error(error.message || "Internal server error")
    return res.status(500).json({ message: "Internal server error" })
  }
}

export default errorHandler