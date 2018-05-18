/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  for (let i = 0, len = str.length; i < (len + 1) / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true
}

export default isPalindrome
