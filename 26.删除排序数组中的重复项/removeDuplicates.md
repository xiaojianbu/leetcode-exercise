# 思路

## 题目

给定一个排序数组， 你需要在原地删除重复出现的元素， 使得每个元素只出现一次， 返回移除后数组的新长度。

不要使用额外的数组空间， 你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定数组 nums = [1, 1, 2],

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

你不需要考虑数组中超出新长度后面的元素。

示例 2:

给定 nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。

## 自己的思路

1.  因为数组是一个排序数组，所以每次比较相邻两个数组元素是否相等
2.  若相等，则把前一个删除，数组长度减一，更新需要比较元素的坐标值为不相等的数目长度
3.  若不相等，index + 1，不相等的数目长度 + 1

## 最优解的思路

1. 对输入进行判断处理（空，空数组，数组长度为1）
2. 记录下标为0，从下标1开始遍历数组，如果当前下标数字与记录下标数字不同，记录下标加1，当前数字赋值给记录下标。

## 官方题解

方法： 双指针法

数组完成排序后，我们可以放置两个指针 i 和 j，其中 i 是慢指针，而 j 是快指针。只要 nums[i] = nums[j]，我们就增加 j 以跳过重复项。

当我们遇到 nums[j] !== nums[i] 时，跳过重复项的运行已经结束，因此我们必须把它（nums[j]）的值复制到 nums[i + 1]。然后递增 i，接着我们将再次重复相同的过程，直到 j 到达数组的末尾为止。

复杂度分析

时间复杂度：O(n)， 假设数组的长度是 n，那么 i 和 j 分别最多遍历 n 步。

空间复杂度：O(1)。
