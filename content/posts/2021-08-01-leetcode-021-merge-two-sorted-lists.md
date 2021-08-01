---
title: Leetcode-021-合并两个有序链表 (Merge Two Sorted Lists)
description: Leetcode021合并两个有序链表的解题思路
tags:
  - 刷题
  - Leetcode
  - 栈
image: "https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg"
slug: "/leetcode-merge-two-sorted-lists/"
noComments: false
---

两数之和
====
#### 题目描述
[链接](https://leetcode-cn.com/problems/merge-two-sorted-lists)

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 
***
关键点
----
> 栈的基本特点和操作, 可以用数组来模拟栈

使用栈，遍历输入字符串
如果当前字符为左半边括号时，则将其压入栈中
如果遇到右半边括号时，分类讨论：
1. 取出栈最后一个左括号元素，如此时右括号为对应的左半边括号匹配成功，继续循环
2. 若不为对应的左半边括号，反之返回 false
3. 若最后栈不为空，则直接返回 false

知识点
----
>- arr.push(...items) —— 从尾端添加元素，
>- arr.pop() —— 从尾端提取元素，
>- arr.shift() —— 从首端提取元素，
>- arr.unshift(...items) —— 从首端添加元素。
>- arr.includes(item, from) —— 从索引 from 开始搜索 item，如果找到则返回 true（译注：如果没找到，则返回 false）

注意点
----
stack.pop() 方法会移除最后一个元素并返回这个元素。这个方法可以用来将匹配的括号移除而仅仅在stack中留下未匹配的括号。 我们此时再将所遍历的字符与mapper中的所pop出的左括号对应的右括号做对比。如果不符合mapper中的左右括号的规则则返回失败。如果最后stack中还有元素，则说明还有括号没有匹配成功也返回失败。 只有当stack为空的情况下，返回成功，证明所有括号匹配正确。需要注意的是，最后判断栈为空的语句需在遍历循环体之外，最后在进行判断以及返回。

***
代码
----

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let valid=true;
    const stack=[] //定义一个stack
    const mapper={ //定义一个左右括号所对应的对象
        '(':')',
        '{':'}',
        '[':']'
    }
    //遍历字符串
    for(let i in s){
        const v=s[i] //将字符串中每单个字符存储到变量v
        //如果字符串是左括号则压入栈中
        if(['(','{','['].includes(v)){
            stack.push(v)
        }else{ //如果是右括号，则分类讨论
            const lastleft=stack.pop() //将stack中最后一个元素移除并存储到变量lastleft中
            if(v!==mapper[lastleft]){ //如果这一右括号的元素不是最后一个左括号所对应的右括号
                return false //返回false
            }
        }
    }
        if(stack.length>0)return false //如果stack中元素大于0这意味着栈中还有元素 则返回false   
        return valid //如果栈中没有任何元素，说明所有括号都匹配成功返回 true
};
```