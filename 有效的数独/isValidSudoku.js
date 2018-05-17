/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  // 判断行是否重复
  for (let i = 0, len = board.length; i < len; i++) {
    if (!isOnly(board[i])) {
      return false
    }
  }

  // 判断列是否重复
  for (let i = 0, len = board[0].length; i < len; i++) {
    let arr = []
    for (let j = 0, colLen = board.length; j < colLen; j++) {
      arr.push(board[j][i])
    }
    if (!isOnly(arr)) {
      return false
    }
  }

  // 判断宫是否重复
  for (let i = 0, len = board.length; i < len; i++) {
    let arr = []
    for (let j = 0, len = board.length; j < len; j++) {
      arr.push(board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * Math.floor(i % 3) + Math.floor(j % 3)])
    }
    if (!isOnly(arr)) {
      return false
    }
  }


  return true
}


/**
 * 判断数组中的数字元素是否唯一
 * @param {character[]} arr
 * @return {boolean}
 */
function isOnly(arr) {
  let newArr1 = arr.filter(item => item !== '.')
  let newArr2 = [...new Set(newArr1)]

  return newArr1.length === newArr2.length
}

export default isValidSudoku
