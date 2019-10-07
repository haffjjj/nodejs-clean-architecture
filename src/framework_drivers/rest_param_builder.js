/**
 * @param {Object} query is object from req.query
 */
const restParamBuilder = (query) => {
  const search = {}
  const filter = {}

  Object.keys(query).forEach((k) => {
    const [prefix, key] = k.split('_')
    if (prefix.indexOf('search') > -1) {
      search[key] = query[k]
    } else if (prefix.indexOf('filter') > -1) {
      filter[key] = query[k]
    }
  })

  return {
    search, filter,
  }
}

export default restParamBuilder