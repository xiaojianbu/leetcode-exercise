/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = function (head) {
  let pre = null
  let next = null
  let node = head
  while (node !== null) {
    next = node.next
    node.next = pre
    pre = node
    node = next
  }
  return pre
}

export function reverseList1(head) {
  if (head === null || head.next === null) {
    return head
  }
  let nextNode = head.next
  let newNode = reverseList1(nextNode)
  nextNode.next = head
  head.next = null
  return newNode
}
