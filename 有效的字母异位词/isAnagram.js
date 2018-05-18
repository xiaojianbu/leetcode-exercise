/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  let objS = {}
  let objT = {}

  if (s.length !== t.length) {
    return false
  }

  for (let i = 0, len = s.length; i < len; i++) {
    if (objS.hasOwnProperty(s[i])) {
      objS[s[i]] += 1
    } else {
      objS[s[i]] = 1
    }
  }
  for (let i = 0, len = t.length; i < len; i++) {
    if (objT.hasOwnProperty(t[i])) {
      objT[t[i]] += 1
    } else {
      objT[t[i]] = 1
    }
  }
  for (const key in objS) {
    if (objS.hasOwnProperty(key)) {
      if (!objT.hasOwnProperty(key) || objT[key] !== objS[key]) {
        return false
      }
    }
  }
  return true
}

export default isAnagram
