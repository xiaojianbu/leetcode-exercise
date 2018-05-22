/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let str = ''
  while (n) {
    n -= 1
    let index = 1
    let string = ''
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        index += 1
      } else {
        string += index + str[i]
        index = 1
      }
    }
    str = string || '1'
  }
  return str
}

export default countAndSay
