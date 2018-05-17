/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {\
  let len = matrix.length
  for (let i = 0; i < (len - 1) / 2; i++) {
    for (let j = 0; j < len; j++) {
      let tmp = matrix[i][j]
      matrix[i][j] = matrix[len - 1 - i][j]
      matrix[len - 1 - i][j] = tmp
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      let tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    } 
  }
}

export default rotate
