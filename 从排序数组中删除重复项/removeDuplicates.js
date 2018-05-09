/**
 *
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let newLen = 0
  for (let i = 0, len = nums.length; i < len;) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      len -= 1
      i = newLen
    } else {
      newLen += 1
      i += 1
    }
  }
}

export default removeDuplicates
