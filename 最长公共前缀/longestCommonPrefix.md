# 题目

最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]

输出: "fl"

示例 2:

输入: ["dog","racecar","car"]

输出: ""

解释: 输入不存在公共前缀。

说明:

所有输入只包含小写字母 a-z 。

## 自己的思路

1.  循环判断第一个数组元素的字符是否和其它数组元素相等，
2.  相等则索引加一
3.  不等，则判断索引是否为 0，为 0 返回空字符串，否则返回第一个数组元素从 0 到索引之间的字符串

## 别人的思路

1.  先找到最短字符串
2.  在开始遍历寻找公共前缀
