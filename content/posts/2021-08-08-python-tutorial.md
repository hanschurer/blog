---
title: Python不完全指北
description: 一些关于Python的知识点，记录一下以防自己忘记。
tags:
  - Javascript
image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119518748/original/48dab812d165b94ed6899bc8702da412be377800/code-web-apps-and-pages-using-html5-scss-js-es6-vue-js-nuxt-js.jpg"
slug: "/python-basic/"
noComments: false
---
windows在首次使用之前需要管理员shell执行以下命令，否则无法激活环境。
```shell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```
### 创建虚拟环境和项目文件夹

建立一个项目之前，我们需要创建一个虚拟的python环境，这样各个库之间不会互相影响。

```shell
> cd $home
> mkdir pyworkshop
> cd pyworkshop
> py -3 -m venv env
> env\scripts\activate
```



```shell
# activate the virtual environment
> env\scripts\activate

# make a new empty python file called project.py
(env)> fc > project.py
```

### Adding, Removing, Changing, and Finding Items in `list`s cheat sheet

| action                                           	| method                                	| returns           	| possible errors                            	|
|--------------------------------------------------	|---------------------------------------	|-------------------	|--------------------------------------------	|
| check length                                     	| `len(my_list)`                        	| `int`             	|                                            	|
| **add:** to the end                              	| `my_list.append(item)`                	| -                 	|                                            	|
| **insert:** at position                          	| `my_list.insert(pos, item)`           	| -                 	|                                            	|
| **update:** at position                          	| `my_list[pos] = item`          	| -        -         	| `IndexError` if `pos` is >= `len(my_list)`                                          	|
| **extend:** add items from another list          	| `my_list.extend(other_list)`          	| -                 	|                                            	|
| is item in list?                                 	| `item in my_list`                     	| `True` or `False` 	|                                            	|
| **index** of item                                	| `my_list.index(item)`                 	| `int`             	| `ValueError` if `item` is not in `my_list` 	|
| **count** of item                                	| `my_list.count(item)`                 	| `int`             	|                                            	|
| **remove** an item                               	| `my_list.remove(item)`                	| -                 	| `ValueError` if `item` not in `my_list`    	|
| **remove** the last item, or an item at an index 	| `my_list.pop()` or `my_list.pop(pos)` 	| `item`            	| `IndexError` if `pos` >= `len(my_list)`    	|

