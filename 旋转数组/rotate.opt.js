/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  let len = nums.length
  let newK = k % len
  nums.unshift(...nums.splice(len - newK, newK))
}

export default rotate
