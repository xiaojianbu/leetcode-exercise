/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  let newNum1 = nums1
  let newNum2 = nums2
  let arr = []
  let len1 = newNum1.length
  let len2 = newNum2.length
  if (len1 > len2) {
    [newNum1, newNum2] = [newNum2, newNum1];
    [len1, len2] = [len2, len1]
  }
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (newNum1[i] === newNum2[j]) {
        arr.push(nums2[j])
        nums2.splice(j, 1)
        len2 = nums2.length
        break
      }
    }
  }
  return arr
}

export default intersect
