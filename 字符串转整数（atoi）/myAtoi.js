/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  let newStr = str.trim()
  let myRe = /\d/
  let int = ''
  let sign = 1
  let index = 0
  if (newStr[0] === '+') {
    sign = 1
    index = 1
    while (myRe.test(newStr[index])) {
      int += newStr[index]
      index += 1
    }
  } else if (newStr[0] === '-') {
    sign = -1
    index = 1
    while (myRe.test(newStr[index])) {
      int += newStr[index]
      index += 1
    }
  } else {
    while (myRe.test(newStr[index])) {
      int += newStr[index]
      index += 1
    }
  }
  if (index === 0 || (index === 1 && int === '')) {
    return 0
  } else {
    if (parseInt(int, 10) > Math.pow(2, 31) - 1) {
      return sign === 1 ? Math.pow(2, 31) - 1 : sign * Math.pow(2, 31)
    } else {
      return sign * parseInt(int, 10)
    }
  }
}

export default myAtoi
