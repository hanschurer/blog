---
layout: blog
title: New 操作符的原理
date: 2022-06-10T13:12:58.447Z
description: new 操作符通过执行自定义构造函数或内置对象构造函数，生成对应的对象实例。
---
## 相关问题[​](http://febook.hzfe.org/awesome-interview/book2/js-new#%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98 "Direct link to heading")

* new 操作符做了什么
* new 操作符的模拟实现

## 回答关键点[​](http://febook.hzfe.org/awesome-interview/book2/js-new#%E5%9B%9E%E7%AD%94%E5%85%B3%E9%94%AE%E7%82%B9 "Direct link to heading")

`构造函数` `对象实例`

new 操作符通过执行自定义构造函数或内置对象构造函数，生成对应的对象实例。

## 知识点深入[​](http://febook.hzfe.org/awesome-interview/book2/js-new#%E7%9F%A5%E8%AF%86%E7%82%B9%E6%B7%B1%E5%85%A5 "Direct link to heading")

### 1. new 操作符做了什么[​](http://febook.hzfe.org/awesome-interview/book2/js-new#1-new-%E6%93%8D%E4%BD%9C%E7%AC%A6%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88 "Direct link to heading")

1. 在内存中创建一个新对象。
2. 将新对象内部的 \_\_proto\_\_ 赋值为构造函数的 prototype 属性。
3. 将构造函数内部的 this 被赋值为新对象（即 this 指向新对象）。
4. 执行构造函数内部的代码（给新对象添加属性）。
5. 如果构造函数返回非空对象，则返回该对象。否则返回 this。

### 2. new 操作符的模拟实现[​](http://febook.hzfe.org/awesome-interview/book2/js-new#2-new-%E6%93%8D%E4%BD%9C%E7%AC%A6%E7%9A%84%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0 "Direct link to heading")

```
function fakeNew() {
  // 创建新对象
  var obj = Object.create(null);
  var Constructor = [].shift.call(arguments);
  // 将对象的 __proto__ 赋值为构造函数的 prototype 属性
  obj.__proto__ = Constructor.prototype;
  // 将构造函数内部的 this 赋值为新对象
  var ret = Constructor.apply(obj, arguments);
  // 返回新对象
  return typeof ret === "object" && ret !== null ? ret : obj;
}

function Group(name, member) {
  this.name = name;
  this.member = member;
}

var group = fakeNew(Group, "hzfe", 17);
```

## References[​](http://febook.hzfe.org/awesome-interview/book2/js-new#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99 "Direct link to heading")

1. [new 操作符 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
2. [The new Operator](https://262.ecma-international.org/5.1/#sec-11.2.2)