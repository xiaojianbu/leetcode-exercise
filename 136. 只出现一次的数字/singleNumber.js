/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  nums.sort()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
}

export default singleNumber
