/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let len = nums.length
  let start = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0 && start !== len - 1) {
      nums[start] = nums[i]
      if (start !== i) {
        nums[i] = 0
      }
      start += 1
    }
  }
}

export default moveZeroes
