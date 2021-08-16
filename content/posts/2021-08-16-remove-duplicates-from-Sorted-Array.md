---
title: Leetcode-026-删除有序数组中的重复项 (Remove Duplicates from Sorted Array)
description: Leetcode026 删除有序数组中的重复项解题思路
tags:
  - 刷题
  - Leetcode
  - 双指针
image: "https://tva1.sinaimg.cn/large/007S8ZIlly1ghlucxqaoyg30qg0esju1.gif"
slug: "/remove-duplicates-from-sorted-array/"
noComments: false
---

删除有序数组中的重复项
====
#### 题目描述
[链接](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array)

给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。



Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

 
***
关键点
----
使用快慢指针来记录遍历的坐标。 快指针用来扫描，慢指针用来指向答案位置


知识点
----

1. 开始时这两个指针都指向第一个数字
2. 如果两个指针指的数字相同，则快指针向前走一步
3. 如果不同，则两个指针都向前走一步
4. 当快指针走完整个数组后，慢指针当前的坐标加 1 就是数组中不同数字的个数

注意点
----
首先考虑边界条件，当给定数组为空时，直接返回0

***
代码
----

```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if nums:
            slow=0  #如果两个指针所指的数组相同，则扫描指针继续向前移动
            for fast in range(1,len(nums)): #快指针从index 1开始， 此时慢指针为index 0
                if nums[fast]!=nums[slow]: #如果此时两个指针所在的数字不同，则慢指针为答案指针往前+1
                    slow+=1
                    nums[slow]=nums[fast]   #将相同数字的第二个数字覆盖层快指针所指的不同数字
                
            return slow+1 #返回慢指针+1 就是数组中不同数字的个数
        else:
            return 0
```