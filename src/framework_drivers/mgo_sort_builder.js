/**
 * @param {object} filter turn sort(string) to object
 * @param {object} def is default sort
 */
const mgoSortBuilder = (filter, def) => {
  if (filter && filter.length > 0) {
    const p = filter.split(' ')
    const result = {}
    p.forEach((s)=>{
      const key = s[0] === '-' ? s.substring(1) : s
      Object.assign(result, {[key]: s[0] !== '-' ? 1 : -1})
    })
    return result
  } else {
    return def
  }
}

export default mgoSortBuilder
