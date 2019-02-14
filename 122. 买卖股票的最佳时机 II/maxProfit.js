/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let sum = 0
  let len = prices.length

  for (let i = 0; i < len - 1; i++) {
    let number = prices[i + 1] - prices[i]
    if (number > 0) {
      sum += number
    }
  }
  return sum
}

export default maxProfit
