/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let number = target - nums[i]
    for (let j = i + 1; j < len; j++) {
      if (nums[j] === number) {
        return [i, j]
      }
    }
  }
}

export default twoSum
