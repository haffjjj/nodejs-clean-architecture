import log4js from "log4js"
import _error from "./error"
// import * as Sentry from "@sentry/node"

/**
 * @param {String} type info || error
 * @param {String} context
 * @param {String} message
 * @param {Error} error
 */
export default (level, context, message, error = {}) => {
  log4js.configure({
    appenders: {log: {type: "file", filename: "./logs/logger.log"}},
    categories: {default: {appenders: ["log"], level: level}},
  })

  const logger = log4js.getLogger("log")

  const obj = {
    context: context,
    message: message,
    stack: error.stack,
  }

  if (level === "error") {
    logger.error(JSON.stringify(obj))

    // send to sentry if error = internal_server_error && env = production
    // if (_error.getStatusCode(message) === 500 && process.env.NODE_ENV === "prod") {
    //   Sentry.captureException(error)
    // }
  } else if (level === "info") {
    logger.info(JSON.stringify(obj))
  }

  if (process.env.NODE_ENV === "dev") {
    console.log(level, "|", context, "|", message, "|", error.stack || ``)
  }
}
