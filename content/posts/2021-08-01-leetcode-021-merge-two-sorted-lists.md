---
title: Leetcode-021-合并两个有序链表 (Merge Two Sorted Lists)
description: Leetcode021合并两个有序链表的解题思路
tags:
  - 刷题
  - Leetcode
  - 栈
  - 链表
image: "https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg"
slug: "/leetcode-merge-two-sorted-lists/"
noComments: false
---

合并两个有序链表
====
#### 题目描述
[链接](https://leetcode-cn.com/problems/merge-two-sorted-lists)

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 
***
关键点
----
本题可以使用递归来解，将两个链表头部较小的一个与剩下的元素合并，并返回排好序的链表头，当两条链表中的一条为空时终止递归。

知识点
----

**单链表 [Linked List]**：由各个内存结构通过一个 Next 指针链接在一起组成，每一个内存结构都存在后继内存结构【链尾除外】，内存结构由数据域和 Next 指针域组成。

单链表实现图示：
![img](https://upload-images.jianshu.io/upload_images/1411747-464ee32fe3ea830d.png?imageMogr2/auto-orient/strip|imageView2/2/w/804/format/webp)
文字解析：
Data 数据 + Next 指针，组成一个单链表的内存结构 ；
第一个内存结构称为 链头，最后一个内存结构称为 链尾；
链尾的 Next 指针设置为 NULL [指向空]；
单链表的遍历方向单一【只能从链头一直遍历到链尾】

注意点
----
首先设置临界条件，也就是递归终结条件，即两条链表中有一条为空则终止递归。返回相对的那个链表。

***l1 l2分别是头指针***  
当l1的value小于l2时，取出的是较小的value，故剩余的链表应该是l2的所有value和l1第一个val的下一个value相结合。
需要注意的是最后返回的应该是含较小值的那个列表。

***
代码
----

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 == null) return l2
    if(l2 == null) return l1
    //若l1 = [1,2,3] L2 = [2,3,4]
    if(l1.val<l2.val){ //l1.val =1 l2.val=2
        l1.next= mergeTwoLists(l1.next,l2) //将较小的val提取出来作为第一个元素 剩余链表做一个合并操作，内容是l1的剩余元素和l2的所有元素
        return l1
    }else{
        l2.next= mergeTwoLists(l1,l2.next)
        return l2
    }
};

```