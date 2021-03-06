# 思路

## 题目

给定一个整数数组和一个目标值， 找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案， 且同样的元素不能被重复利用。

示例：

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9

所以返回[0, 1]

## 自己的思路

1.  用目标值减去第一个数组元素得到差值，
2.  在数组中从减数元素的索引值 + 1 开始去查找是否存在值与差值相等的元素，
3.  如果存在则返回减数元素的索引值和与差值相等元素的索引值，
4.  若不存在则用目标值减去下一个数组元素得到差值，回到第二步。

## 最优解的思路

利用 hashTable

1.  用目标值减去第一个数组元素得到差值，
2.  判断 hashTable 里面是否存在与差值相等的键。
3.  若存在则返回 hashTable 存的索引值和减数元素的索引值。
4.  若不存在则将当前数组元素存在 hashTable 中，键为数组元素的值，值为当前数组元素的索引值。
