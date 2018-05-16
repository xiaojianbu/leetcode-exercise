/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let arr = digits
  let flag = true
  let len = arr.length
  while (len && flag) {
    arr[len - 1] = arr[len - 1] + 1
    if (arr[len - 1] >= 10) {
      arr[len - 1] = arr[len - 1] % 10
      len -= 1
      if (len === 0) {
        arr.unshift(1)
      }
    } else {
      flag = false
    }
  }
  return arr
}

export default plusOne
