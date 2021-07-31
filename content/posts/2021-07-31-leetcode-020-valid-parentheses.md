---
title: Leetcode-020-有效的括号 (Valid Parentheses)
description: Leetcode020有效的括号的解题思路
tags:
  - 刷题
  - Leetcode
image: "https://tva1.sinaimg.cn/large/007S8ZIlly1ghltyb2lpvg30qo0f0n2n.gif"
slug: "/leetcode-valid-parentheses/"
noComments: false
---

两数之和
====
#### 题目描述
[链接](https://leetcode-cn.com/problems/valid-parentheses)

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。


Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 


***
关键点
----
>1. 求和转换为求差
>2. 借助 Map 结构将数组中每个元素及其索引相互对应
>3. 以空间换时间，将查找时间从 O(N) 降低到 O(1)

知识点
----
>- new Map() —— 创建 map。
>- map.set(key, value) —— 根据键存储值。
>- map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
>- map.has(key) —— 如果 key 存在则返回 true，否则返回 false。

注意点
----
>1. 判断map中是否有diff应该在map.set之前。
>2. 因为是求差，所以应该是target减去nums中的每个元素
>3. 因为问题最后输出的是元素的索引，为了方便起见，将map的key设置为nums中的每一个元素，将他们的value设置为他们的index。这同样有利于用map的一些内置函数进行操作，例如map.has(), map.get()等。

***
代码：
----

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map=new Map();//创建一个Map结构
    for(let i=0; i<nums.length; i++){
        //求和转换为求差, target>nums[i] 故用减法
        let diff=target-nums[i];
        if(map.has(diff)){ //检查是否存在值为diff的key
            return [map.get(diff),i] //如果有，返回一个数组，第一个是当前元素的索引，第二个是map中key为diff的索引
        }
        //借助 Map 结构将数组中每个元素(Key)及其索引(value)相互对应
        map.set(nums[i],i);
    }
};

