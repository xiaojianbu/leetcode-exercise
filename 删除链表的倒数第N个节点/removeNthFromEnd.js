/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export const removeNthFromEnd = function (head, n) {
  if (head === null) {
    return null
  }

  let node = head
  let len = 0

  while (node !== null) {
    len += 1
    node = node.next
  }

  let fromStart = len - n + 1

  if (fromStart === 1) {
    return head.next
  }

  node = head
  let i = 0

  while (node !== null) {
    i += 1
    if (i === fromStart - 1) {
      node.next = node.next.next
    }
    node = node.next
  }

  return head
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export const removeNthFromEnd1 = function (head, n) {
  if (head === null) {
    return null
  }

  let fastNode = head
  let slowNode = head

  for (let i = 0; i < n; i++) {
    fastNode = fastNode.next
  }

  if (fastNode === null) {
    head = head.next
    return head
  }

  while (fastNode.next !== null) {
    fastNode = fastNode.next
    slowNode = slowNode.next
  }
  slowNode.next = slowNode.next.next
  return head
}
