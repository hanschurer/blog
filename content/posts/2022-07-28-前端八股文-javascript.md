---
layout: blog
title: 前端八股文- Javascript
slug: /fe-js/
date: 2022-07-28T19:56:17.014Z
description: 高频率八股文- javascript
---
说一说cookie, session, sessionStorage, localStorage 区别？


得分点
数据存储位置、生命周期、存储大小、写入方式、数据共享、发送请求时是否携带、应用场景

1. cookie, sessionStorage, localStorage都是浏览器存储 , session 是服务器储存
2. cookie由服务器写入， sessionStorage以及localStorage都是由前端写入 
3. cookie的生命周期由服务器端写入时就设置好的，localStorage是写入就一直存在，除非手动清除，sessionStorage是由页面关闭时自动清除 
4. cookie存储空间大小约4kb， sessionStorage及localStorage空间比较大，大约5M 
5. 三者的数据共享都遵循同源原则，sessionStorage还限制必须是同一个页面 
6. 前端给后端发送请求时，自动携带cookie, sessionStorage 及 localStorage都不携带 
7. cookie一般存储登录验证信息或者token，localStorage常用于存储不易变动的数据，减轻服务器压力，sessionStorage可以用来监测用户是否是刷新进入页面，如音乐播放器恢复进度条功能