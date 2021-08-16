---
title: Leetcode-160-相交链表 (Intersection of Two Linked Lists)
description: Leetcode026 相交链表解题思路
tags:
  - 刷题
  - Leetcode
  - 双指针
  - 链表
image: "https://pic.leetcode-cn.com/1628662967-RLmciV-2.png"
slug: "/Intersection-of-Two-Linked-Lists/"
noComments: false
---

删除有序数组中的重复项
====
#### 题目描述
[链接](https://leetcode-cn.com/problems/intersection-of-two-linked-lists)

给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.


 
***
关键点
----
![img](https://pic.leetcode-cn.com/1628662967-RLmciV-2.png)
![img](https://pic.leetcode-cn.com/1628662688-ZdSYRM-1.png)


知识点
----

1. 使用 a, b 两个指针分别指向 A, B 这两条链表, 两个指针相同的速度向后移动,
2. 当 a 到达链表的尾部时,重定位到链表 B 的头结点
3. 当 b 到达链表的尾部时,重定位到链表 A 的头结点。
4. a, b 指针相遇的点为相交的起始节点，否则没有相交点

注意点
----
链表的最后一个node指针始终会指向null，代表链表结束

***
伪代码
----

```python
a = headA
b = headB
while a,b指针不相等时 {
    if a指针为空时
      a指针重定位到链表 B的头结点
    else
      a指针向后移动一位
    if b指针为空时
      b指针重定位到链表 A的头结点
    else
      b指针向后移动一位
}
return a
```
***
代码
----

```python
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        a, b = headA, headB
        while a != b:
            a = a.next if a else headB #当a指针一直遍历到链表A的末端时，a最后会等于null， 当a=null 条件为否， a将重定位到B的头节点 
            b = b.next if b else headA
        return a
```

复杂度分析
---
* 时间复杂度：$O(N)$
* 空间复杂度：$O(1)$