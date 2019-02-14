/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  let hashTable = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    if (hashTable.hasOwnProperty(nums[i])) {
      return true
    } else {
      hashTable[nums[i]] = i
    }
  }
  return false
}

export default containsDuplicate
