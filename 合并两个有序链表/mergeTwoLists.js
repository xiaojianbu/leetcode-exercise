/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }

  let head = l1.val > l2.val ? l2 : l1
  let list = l1.val > l2.val ? l1 : l2
  let pre = null

  while (list !== null) {
    let nextNode = list.next
    while (head) {
      if (list.val < head.val) {
        pre.next = list
        list.next = head
        head = list
        break
      }
      pre = head
      head = head.next
    }
    if (head === null) {
      pre.next = list
      break
    }

    list = nextNode
  }

  return l1.val > l2.val ? l2 : l1
}

export function mergeTwoLists1(l1, l2) {
  let head = {}
  let node = null
  let curNode = head

  while (l1 && l2) {
    if (l1.val > l2.val) {
      node = new ListNode(l2.val)
      l2 = l2.next
    } else {
      node = new ListNode(l1.val)
      l1 = l1.next
    }
    curNode.next = node
    curNode = node
  }
  curNode = l1 || l2

  return head.next
}

export function mergeTwoLists2(l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists2(l1, l2.next)
    return l2
  }
}
