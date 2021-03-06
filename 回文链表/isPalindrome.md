# 题目

请判断一个链表是否为回文链表。

示例 1:

输入: 1->2

输出: false

示例 2:

输入: 1->2->2->1

输出: true

进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

## 思路

简单的方法就是遍历链表，将链表的值放到数组中，再比较数组中的值是否为回文

进阶要求用 O(n)时间复杂度和 O(1)空间复杂度解决，说明不能使用而外的数组。

思路是：借鉴判断链表是否有环的思想，利用快慢指针法(快指针每次走两步，慢指针每次走一步)找到链表中点，然后将后半部分进行反转，分别从头、中点遍历判断是否相等。
