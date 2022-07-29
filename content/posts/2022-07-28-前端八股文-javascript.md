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
闭包是指有权访问另一个函数作用域中变量的函数，创建方法是创建一个嵌套函数，然后内部函数可以访问到外部函数中的变量。闭包原理：作用域链，当前作用域可以访问到上级作用域的变量。

解决的问题：能够使函数作用域中变量在函数执行结束后不被销毁，同时函数外部可以访问函数内部的局部变量。

问题：垃圾回收器不会将闭包中变量销毁，会造成内存泄露，内存泄漏过多会造成内存溢出。

加分回答 
闭包的应用，能够模仿块级作用域，能够实现柯里化，在构造函数中定义特权方法、防抖节流。

</details>

## 手写防抖和节流

<details><summary>展开/收起</summary>

</details>

## 说一说Promise是什么与使用方法？

<details><summary>展开/收起</summary>

得分点 pendding、rejected、resolved、微任务、then、catch、Promise.resolve()、Promise.reject()、Promise.all() Promise.any()、Promise.race() 

标准回答 Promise的作用：Promise是异步微任务，解决了异步多层嵌套回调的问题，让代码的可读性更高，更容易维护 Promise使用：Promise是ES6提供的一个构造函数，可以使用Promise构造函数new一个实例，Promise构造函数接收一个函数作为参数，这个函数有两个参数，分别是两个函数 \`resolve\`和\`reject\`，\`resolve\`将Promise的状态由等待变为成功，将异步操作的结果作为参数传递过去；\`reject\`则将状态由等待转变为失败，在异步操作失败时调用，将异步操作报出的错误作为参数传递过去。实例创建完成后，可以使用\`then\`方法分别指定成功或失败的回调函数，也可以使用catch捕获失败，then和catch最终返回的也是一个Promise，所以可以链式调用。 

Promise的特点： 1. 对象的状态不受外界影响（Promise对象代表一个异步操作，有三种状态）。 - pending（执行中） - Resolved（成功，又称Fulfilled） - rejected（拒绝） 其中pending为初始状态，fulfilled和rejected为结束状态（结束状态表示promise的生命周期已结束）。 2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。 Promise对象的状态改变，只有两种可能（状态凝固了，就不会再变了，会一直保持这个结果）： - 从Pending变为Resolved - 从Pending变为Rejected 3. resolve 方法的参数是then中回调函数的参数，reject 方法中的参数是catch中的参数 4. then 方法和 catch方法 只要不报错，返回的都是一个fullfilled状态的promise 

加分回答 Promise的其他方法： Promise.resolve() :返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。 Promise.reject()：返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法。 Promise.all()：返回一个新的promise对象，该promise对象在参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。 Promise.any()：接收一个Promise对象的集合，当其中的一个 promise 成功，就返回那个成功的promise的值。 Promise.race()：当参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。

</details>

## 手写Promise

<details><summary>展开/收起</summary>

</details>

## 说一说跨域是什么？如何解决跨域问题？

<details><summary>展开/收起</summary>

得分点\
同源限制、协议、域名、端口、CORS、node中间件、JSONP、postmessage\
\
\
标准回答\
跨域：当前页面中的某个接口请求的地址和当前页面的地址如果协议、域名、端口其中有一项不同，就说该接口跨域了。\
跨域限制的原因：浏览器为了保证网页的安全，出的同源协议策略。

跨域报错信息：

![](https://uploadfiles.nowcoder.com/images/20220226/4107856_1645863343481/0BF44F815EA97361C3608F016702DF18)

跨域解决方案\
cors：目前最常用的一种解决办法，通过设置后端允许跨域实现。\
res.setHeader('Access-Control-Allow-Origin', '*');\
res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS, POST");\
\
node中间件、nginx反向代理：跨域限制的时候浏览器不能跨域访问服务器，node中间件和nginx反向代理，都是让请求发给代理服务器，静态页面面和代理服务器是同源的，然后代理服务器再向后端服务器发请求，服务器和服务器之间不存在同源限制。\
\
JSONP：利用的原理是script标签可以跨域请求资源，将回调函数作为参数拼接在url中。后端收到请求，调用该回调函数，并将数据作为参数返回去，注意设置响应头返回文档类型，应该设置成javascript。\
\
postmessage：H5新增API，通过发送和接收API实现跨域通信。\
\
\
加分回答\
跨域场景：前后端分离式开发、调用第三方接口

</details>

## 说一说BFC

<details><summary>展开/收起</summary>

BFC 全称为 block formatting context，中文为“块级格式化上下文”。它是一个只有块级盒子参与的独立块级渲染区域，它规定了内部的块级盒子如何布局，且与区域外部无关。

**BFC 有什么用**

* 修复浮动元素造成的高度塌陷问题。
* 避免非期望的外边距折叠。
* 实现灵活健壮的自适应布局。

**触发 BFC 的常见条件**

* float 的值不为 none。
* position 的值不为 relative 或 static。
* overflow 的值不为 visible 或 clip（除了根元素）。
* display 的值为 table-cell，table-caption，或 inline-block 中的任意一个。
* display 的值为 flow-root，或 display 值为 flow-root list-item。
* flex items，即 display 的值为 flex 或 inline-flex 的元素的直接子元素（该子元素 display 不为 flex，grid，或 table）。
* grid items，即 display 的值为 grid 或 inline-grid 的元素的直接子元素（该子元素 display 不为 flex, grid，或 table）。
* contain 的值为 layout, content, paint，或 strict 中的任意一个。
* column-span 设置为 all 的元素。

**提示**：`display: flow-root`，`contain: layout` 等是无副作用的，可在不影响已有布局的情况下触发 BFC。

</details>

## 说一说JavaScript有几种方法判断变量的类型？

<details><summary>展开/收起</summary>

得分点 typeof、instanceof、Object.prototype.toString.call()（对象原型链判断方法）、 constructor (用于引用数据类型) 

标准回答 JavaScript有4种方法判断变量的类型，分别是typeof、instanceof、Object.prototype.toString.call()（对象原型链判断方法）、 constructor (用于引用数据类型) typeof：常用于判断基本数据类型，对于引用数据类型除了function返回’function‘，其余全部返回’object'。 instanceof：主要用于区分引用数据类型，检测方法是检测的类型在当前实例的原型链上，用其检测出来的结果都是true，不太适合用于简单数据类型的检测，检测过程繁琐且对于简单数据类型中的undefined, null, symbol检测不出来。 constructor：用于检测引用数据类型，检测方法是获取实例的构造函数判断和某个类是否相同，如果相同就说明该数据是符合那个数据类型的，这种方法不会把原型链上的其他类也加入进来，避免了原型链的干扰。 Object.prototype.toString.call()：适用于所有类型的判断检测，检测方法是Object.prototype.toString.call(数据) 返回的是该数据类型的字符串。 这四种判断数据类型的方法中，各种数据类型都能检测且检测精准的就是Object.prototype.toString.call()这种方法。 

加分回答 instanceof的实现原理：验证当前类的原型prototype是否会出现在实例的原型链\_\_proto\_\_上，只要在它的原型链上，则结果都为true。因此，\`instanceof\` 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 \`prototype\`，找到返回true，未找到返回false。Object.prototype.toString.call()原理：Object.prototype.toString 表示一个返回对象类型的字符串，call()方法可以改变this的指向，那么把Object.prototype.toString()方法指向不同的数据类型上面，返回不同的结果

</details>

## 说一说样式优先级的规则是什么？

<details><summary>展开/收起</summary>

得分点 \`!important\`、行内样式、嵌入样式、外链样式、id选择器、类选择器、标签选择器、复合选择器、通配符、继承样式 

标准回答 CSS样式的优先级应该分成四大类 -第一类\`!important\`，无论引入方式是什么，选择器是什么，它的优先级都是最高的。 -第二类引入方式，行内样式的优先级要高于嵌入和外链，嵌入和外链如果使用的选择器相同就看他们在页面中插入的顺序，在后面插入的会覆盖前面的。 -第三类选择器，选择器优先级：id选择器>（类选择器 | 伪类选择器 | 属性选择器 ）> （后代选择器 | 伪元素选择器 ）> （子选择器 | 相邻选择器） > 通配符选择器 。 -第四类继承样式，是所有样式中优先级比较低的。 -第五类浏览器默认样式优先级最低。 加分回答 使用!important要谨慎 - 一定要优先考虑使用样式规则的优先级来解决问题而不是 \`!important\` - 只有在需要覆盖全站或外部 CSS 的特定页面中使用 \`!important\` - 永远不要在你的插件中使用 \`!important\` - 永远不要在全站范围的 CSS 代码中使用 \`!important\` 优先级的比较指的是相同的样式属性，不同样式属性优先级比较失效，比如：在设置\`max-width\`时注意，已经给元素的\`max-width\`设置了\`!important\`但是还不生效，很有可能就是被width覆盖了 举例：\`div\`最终的宽度还是\`200px\` div { max-width: 400px !important; height: 200px;background-color: tomato; width: 200px; }

</details>

## 说一说数组去重都有哪些方法？

<details><summary>展开/收起</summary>

得分点 对象属性、new Set() 、indexOf、hasOwnProperty、reduce+includes、filter 

标准回答 第一种方法：利用对象属性key排除重复项：遍历数组，每次判断对象中是否存在该属性，不存在就存储在新数组中，并且把数组元素作为key，设置一个值，存储在对象中，最后返回新数组。这个方法的优点是效率较高，缺点是占用了较多空间，使用的额外空间有一个查询对象和一个新的数组 第二种方法：利用Set类型数据无重复项：new 一个 Set，参数为需要去重的数组，Set 会自动删除重复的元素，再将 Set 转为数组返回。这个方法的优点是效率更高，代码简单，思路清晰，缺点是可能会有兼容性问题 第三种方法：filter+indexof 去重：这个方法和第一种方法类似，利用 Array 自带的 filter 方法，返回 arr.indexOf(num) 等于 index 的num。原理就是 indexOf 会返回最先找到的数字的索引，假设数组是 \[1, 1]，在对第二个1使用 indexOf 方法时，返回的是第一个1的索引0。这个方法的优点是可以在去重的时候插入对元素的操作，可拓展性强。 第四种方法：这个方法比较巧妙，从头遍历数组，如果元素在前面出现过，则将当前元素挪到最后面，继续遍历，直到遍历完所有元素，之后将那些被挪到后面的元素抛弃。这个方法因为是直接操作数组，占用内存较少。 第五种方法：reduce +includes去重：这个方法就是利用reduce遍历和传入一个空数组作为去重后的新数组，然后内部判断新数组中是否存在当前遍历的元素，不存在就插入到新数组中。这种方法时间消耗多，内存空间也有额外占用。 方法还有很多，常用的、了解的这些就可以 加分回答 以上五个方法中，在数据低于10000条的时候没有明显的差别，高于10000条，第一种和第二种的时间消耗最少，后面三种时间消耗依次增加，由于第一种内存空间消耗比较多，且现在很多项目不再考虑低版本浏览器的兼容性问题，所以建议使用第二种去重方法，简洁方便。

</details>

## 说一说es6中箭头函数？

<details><summary>展开/收起</summary>

得分点 没有this、this是从外部获取、不能使用new、没有arguments、没有原型和super

标准回答 箭头函数相当于匿名函数，简化了函数定义。箭头函数有两种写法，当函数体是单条语句的时候可以省略{}和return。另一种是包含多条语句，不可以省略{}和return。 箭头函数最大的特点就是没有this，所以this是从外部获取，就是继承外部的执行上下文中的this，由于没有this关键字所以箭头函数也不能作为构造函数， 同时通过 \`call()\` 或 \`apply()\` 方法调用一个函数时，只能传递参数（不能绑定this），第一个参数会被忽略。箭头函数也没有原型和super。不能使用yield关键字，因此箭头函数不能用作 Generator 函数。不能返回直接对象字面量。 加分回答 箭头函数的不适用场景： -定义对象上的方法 当调用\` dog.jumps\` 时，\`lives\` 并没有递减。因为 \`this\` 没有绑定值，而继承父级作用域。 var dog = { lives: 20, jumps: () => { this.lives--; } } -不适合做事件处理程序 此时触发点击事件，this不是button，无法进行class切换 var button = document.querySelector('button'); button.addEventListener('click', () => { this.classList.toggle('on'); }); 箭头函数函数适用场景： -简单的函数表达式，内部没有this引用，没有递归、事件绑定、解绑定，适用于map、filter等方法中，写法简洁 var arr = \[1,2,3]; var newArr = arr.map((num)=>num*num) -内层函数表达式，需要调用this，且this应与外层函数一致时 let group = { title: "Our Group", students: \["John", "Pete", "Alice"], showList() { this.students.forEach( student => alert(this.title + ': ' + student) ); } }; group.showList();

</details>

## 说一说事件循环Event loop，宏任务与微任务？

<details><summary>展开/收起</summary>

js是单线程的，主线程在执行时会不断循环往复的从同步队列中读取任务，执行任务，当同步队列执行完毕后再从异步队列中依次执行。宏任务与微任务都属于异步任务，再执行上微任务的优先级高于宏任务，因此每一次都会先执行完微任务在执行宏任务。宏任务有定时器，Dom事件，ajax事件，微任务有：promise的回调、MutationObserver 的回调 ,process.nextTick

</details>