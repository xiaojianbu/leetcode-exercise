# 题目

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"

输出: true

示例 2:

输入: "race a car"

输出: false

## 思路

1.  先对字符串进行处理： 转换为小写，只留下字母和数字
2.  前后两个指针，对两个指针所指向的点进行判断是否相等
