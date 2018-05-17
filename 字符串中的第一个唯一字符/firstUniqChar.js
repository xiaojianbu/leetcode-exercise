/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  let obj = {}
  for (let i = 0, len = s.length; i < len; i++) {
    if (obj.hasOwnProperty(s[i])) {
      obj[s[i]] += 1
    } else {
      obj[s[i]] = 1
    }
  }
  let index = null
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] === 1) {
        if (index === null) {
          index = s.indexOf(key)
        } else {
          index = index < s.indexOf(key) ? index : s.indexOf(key)
        }
      }
    }
  }
  return index === null ? -1 : index
}

export default firstUniqChar
