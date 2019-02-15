/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
  let res = []
  let map = {}
  for (const e of nums1) {
    map[e] = map[e] + 1 || 1
  }
  for (const e of nums2) {
    if (map[e]) {
      res.push(e)
      map[e]--
    }
  }
  return res
}

export default intersect
