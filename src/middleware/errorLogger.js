import logger from "../config/logger.js";

const errorLogger = (err, req, res, next) => {
  logger.error(`${req.method} ${req.originalUrl} - ${err.message}`);

  next(err);
};

export default errorLogger;
