/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let str = ''
  let xStr = String(x)

  if (xStr[0] === '-') {
    for (let i = xStr.length - 1; i >= 1; i--) {
      str += xStr[i]
    }
    let flag = true
    let index = 0
    while (flag) {
      if (str[index] === 0) {
        index += 1
      } else {
        flag = false
      }
    }
    str = '-' + str.slice(index)
  } else if (xStr[0] === '+') {
    for (let i = xStr.length - 1; i >= 1; i--) {
      str += xStr[i]
    }
    let flag = true
    let index = 0
    while (flag) {
      if (str[index] === 0) {
        index += 1
      } else {
        flag = false
      }
    }
    str = '+' + str.slice(index)
  } else {
    for (let i = xStr.length - 1; i >= 0; i--) {
      str += xStr[i]
    }
    let flag = true
    let index = 0
    while (flag) {
      if (str[index] === '0') {
        index += 1
      } else {
        flag = false
      }
    }
    str = str.slice(index)
  }
  if (Number(str) > Math.pow(2, 31) - 1 || Number(str) < -Math.pow(2, 31)) {
    str = 0
  }
  return Number(str)
}

export default reverse
