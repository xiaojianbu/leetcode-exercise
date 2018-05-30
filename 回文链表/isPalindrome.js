/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const isPalindrome = function (head) {
  if (head == null || head.next == null) return true
  let fast = head
  let slow = head

  while (fast.next != null && fast.next.next != null) {
    fast = fast.next.next
    slow = slow.next
  }

  let secondHead = slow.next
  let p1 = secondHead
  let p2 = p1.next

  slow.next = null
  while (p1 != null && p2 != null) {
    let tmp = p2.next
    p2.next = p1
    p1 = p2
    p2 = tmp
  }

  secondHead.next = null

  while (p1 != null) {
    if (head.val !== p1.val) return false
    head = head.next
    p1 = p1.next
  }
  return true
}
