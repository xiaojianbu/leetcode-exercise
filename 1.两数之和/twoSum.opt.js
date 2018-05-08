/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let hashTable = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    let complement = target - nums[i]
    if (hashTable.hasOwnProperty(complement)) {
      return [hashTable[complement], i]
    } else {
      hashTable[nums[i]] = i
    }
  }
  throw new Error('No two sum solutions')
}

export default twoSum
