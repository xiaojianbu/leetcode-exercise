/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let len = strs[0] ? strs[0].length : 0
  let index = 0
  let flag = true

  if (strs.length === 0 || strs[0].length === 0) {
    return ''
  }

  while (flag) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[0][index] !== strs[i][index]) {
        flag = false
      }
    }
    index = flag ? index + 1 : index
    if (index === len) {
      flag = false
    }
  }

  return index ? strs[0].slice(0, index) : ''
}

export let longestCommonPrefix1 = function(strs) {
  let shortest = ''
  let len = strs.length
  if (len === 0) {
    return shortest
  }
  let min = strs[0].length
  let index_min = 0
  strs.forEach((item, index) => {
    if (min > item.length) {
      min = item.length
      index_min = index
    }
  })
  shortest = strs[index_min]
  let commonPr = ''
  for (let i = min; i >= 0; i--) {
    let flag = false

    commonPr = shortest.slice(0, i)
    for (let j = 0; j < len; j++) {
      let item = strs[i]
      if (item.indexOf(commonPr) === 0) {
        flag = true
      } else {
        flag = false
        break
      }
    }
    if (flag) {
      break
    } else {
      commonPr = ''
    }
  }

  return commonPr
}

export default longestCommonPrefix
