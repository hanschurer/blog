---
layout: blog
title: 前端八股文- Javascript
slug: /fe-js/
date: 2022-07-28T19:56:17.014Z
description: 高频率八股文- javascript
---
## 说一说cookie, session, sessionStorage, localStorage 区别？

<details><summary>展开/收起</summary>

**得分点：**数据存储位置、生命周期、存储大小、写入方式、数据共享、发送请求时是否携带、应用场景

1. cookie, sessionStorage, localStorage都是浏览器存储 , session 是服务器储存
2. cookie由服务器写入， sessionStorage以及localStorage都是由前端写入 
3. cookie的生命周期由服务器端写入时就设置好的，localStorage是写入就一直存在，除非手动清除，sessionStorage是由页面关闭时自动清除 
4. cookie存储空间大小约4kb， sessionStorage及localStorage空间比较大，大约5M 
5. 三者的数据共享都遵循同源原则，sessionStorage还限制必须是同一个页面 
6. 前端给后端发送请求时，自动携带cookie, sessionStorage 及 localStorage都不携带 
7. cookie一般存储登录验证信息或者token，localStorage常用于存储不易变动的数据，减轻服务器压力，sessionStorage可以用来监测用户是否是刷新进入页面，如音乐播放器恢复进度条功能

</details>

## 说一说JS数据类型有哪些,区别是什么？

<details><summary>展开/收起</summary>

得分点
Number、String、Boolean、BigInt、Symbol、Null、Undefined、Object、8种

标准回答
JS数据类型分为两类：一类是基本数据类型，也叫简单数据类型，包含7种类型，分别是Number 、String、Boolean、BigInt、Symbol、Null、Undefined。另一类是引用数据类型也叫复杂数据类型，通常用Object代表，普通对象，数组，正则，日期，Math数学函数都属于Object。

数据分成两大类的本质区别：基本数据类型和引用数据类型它们在内存中的存储方式不同。
基本数据类型是直接存储在栈中的简单数据段，占据空间小，属于被频繁使用的数据。
引用数据类型是存储在堆内存中，占据空间大。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，当解释器寻找引用值时，会检索其在栈中的地址，取得地址后从堆中获得实体。

</details>


## 说一说你对闭包的理解？

<details><summary>展开/收起</summary>

得分点 
变量背包、作用域链、局部变量不销毁、函数体外访问函数的内部变量、内存泄漏、内存溢出、形成块级作用域、柯里化、构造函数中定义特权方法



标准回答 
闭包 一个函数和词法环境的引用捆绑在一起，这样的组合就是闭包（closure）。一般就是一个函数A，return其内部的函数B，被return出去的B函数能够在外部访问A函数内部的变量，这时候就形成了一个B函数的变量背包，A函数执行结束后这个变量背包也不会被销毁，并且这个变量背包在A函数外部只能通过B函数访问。 闭包形成的原理：作用域链，当前作用域可以访问上级作用域中的变量 闭包解决的问题：能够让函数作用域中的变量在函数执行结束之后不被销毁，同时也能在函数外部可以访问函数内部的局部变量。 闭包带来的问题：由于垃圾回收器不会将闭包中变量销毁，于是就造成了内存泄露，内存泄露积累多了就容易导致内存溢出。 


加分回答 
闭包的应用，能够模仿块级作用域，能够实现柯里化，在构造函数中定义特权方法、防抖节流。


</details>