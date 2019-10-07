/**
 *
 * @param {String} message
 * @param {Any} data
 * @param {Error} error
 */
const responseRest = (data, message = "success", error = new Error("error")) => {
  let detail = {}
  if (error.detail !== undefined) detail = error.detail

  return {
    message: message,
    data: data,
    detail: detail,
  }
}

export default {
  responseRest,
}