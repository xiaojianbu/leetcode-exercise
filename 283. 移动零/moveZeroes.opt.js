/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let len = nums.length
  let count = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      count += 1
      i -= 1
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0)
  }
}

export default moveZeroes
