---
title: 常见的排序算法思路整理及其实现
description: 包括冒泡排序，插入排序，归并排序，快速排序，基数排序以及二分查找
tags:
  - 排序算法
  - 二分查找
image: ""
slug: "/common-algorithms/"
noComments: true
---
常见的排序算法分为迭代排序以及递归排序，还有一些非比较性的排序算法例如桶排序，基数排序，~~睡眠排序~~( 笑

> **时间复杂度** (Big O)
我们忽略小部分而专注于大部分。与 3x² + x + 1 保持一致，这个方程的大 O 将是 O(n²)，其中 O 只是吸收所有其他无价值的东西（包括最大项的因子）。只需抓住最大项。所以对于 n 项，我们需要 n*n 时间来完成我们的输入

> **空间复杂度** (Spatial Complexity)
空间复杂度用来计算复杂性，或者分析某项运行需要多长时间。空间复杂度或算法需要完成多少空间（例如，多少 RAM 或磁盘空间）。

> **破坏性** (Destructive)
因为我们对数组本身进行操作，所以我们会说这种排序是破坏性的。如果除了已排序的数组之外还需要保留原始数组怎么办？您不能使用这种排序方法，否则您必须先发制人地进行复制。其他排序算法是非破坏性的。

> **稳定性** (Stable)
要被视为稳定排序，排序必须保证如果两个事物相等，它们保持相同的顺序。例如，如果我们有一个看起来像这样的用户数组：[{state: "CO", name: "Sarah Drasner"}, {state: "CA", name: "Shirley Wu"}, {state: "CA", name: "Scott Moss"}]并且我们按州排序，我们必须保证 Shirley 出现在 Scott 之前，这样排序才能被认为是稳定的。

# 迭代排序
## 冒泡排序

Compare two items in an array that are next to each other. If they're out of order (that is, the larger one comes first in the array) swap them. 

比较相邻的元素。如果第一个比第二个大，就交换他们两个。对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。


![img](https://btholt.github.io/complete-intro-to-computer-science/e164c2436ed5486ed13e54135a1d009a/bubblesort.gif)

### 代码实现
```js
function bubbleSort(nums) {
  let swapped=false
  do{
    swapped=false
    for(let i=0;i<nums.length;i++){
      if(nums[i]>nums[i+1]){
        let temp=nums[i]
        nums[i]=nums[i+1]
        nums[i+1]=temp
        swapped=true
      }
    }
  }while(swapped)
  return nums
}
```
### 步骤分析
```
[1, 5, 4, 2, 3]

Are 1 and 5 out of order? No.
Are 5 and 4 out of order? Yes. Swap.

[1, 4, 5, 2, 3]

Are 5 and 2 out of order? Yes. Swap.

[1, 4, 2, 5, 3]

Are 5 and 3 out of order? Yes. Swap.

[1, 4, 2, 3, 5]

End of the array, did we swap anything? Yes. Loop again.
Are 1 and 4 out of order? No.
Are 4 and 2 out of order? Yes. Swap.

[1, 2, 4, 3, 5]

Are 4 and 3 out of order? Yes. Swap.

[1, 2, 3, 4, 5]

Are 4 and 5 out of order? No.
End of the array, did we swap anything? Yes. Loop again.
Are 1 and 2 out of order? No.
Are 2 and 3 out of order? No.
Are 3 and 4 out of order? No.
Are 4 and 5 out of order? No.
End of the array, did we swap anything? No. List is sorted.
```

***

## 插入排序 

将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

![img](https://btholt.github.io/complete-intro-to-computer-science/e1c75fd04db2c886c086edd156ba5ff2/insertionsort.gif)
### 代码实现
```js
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i]; // the numberToInsert number we're looking to insert
    let j; // the inner counter

    // loop from the right to the left
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move numbers to the right until we find where to insert
      nums[j + 1] = nums[j];
    }

    // do the insertion
    nums[j + 1] = numberToInsert;
  }
  return nums;
}
```
### 步骤解析
```
[3, 2, 5, 4, 1]

    ↓
[3, 2, 5, 4, 1] // the ↓ is the number we're looking to insert, everything before is sorted

Is 2 larger than 3? No. Move 3 to the right.
Beginning of list, insert 2 at index 0.

       ↓
[2, 3, 5, 4, 1]

Is 5 larger than 3? Yes.
Insert after 3 (it's already there so it doesn't move)

          ↓
[2, 3, 5, 4, 1]

Is 4 larger than 5? No. Move 5 to the right.
Is 4 larger than 3? Yes.
Insert after 3 at index 2.

             ↓
[2, 3, 4, 5, 1]

Is 1 larger than 5? No. Move 5 to the right.
Is 1 larger than 4? No. Move 4 to the right.
Is 1 larger than 3? No. Move 3 to the right.
Is 1 larger than 2? No. Move 2 to the right.
Beginning of list, insert 1 at index 0

[1, 2, 3, 4, 5]

Reached end of list, list is sorted.
```

The sort is **destructive** since we work on the array itself and the sort can be **stable** as long as you program it so that they stay in order during the insertions.


# 递归排序

## 并归排序

Compare two items in an array that are next to each other. If they're out of order (that is, the larger one comes first in the array) swap them. 

1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；

2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；

3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；

4. 重复步骤 3 直到某一指针达到序列尾；

5. 将另一序列剩下的所有元素直接复制到合并序列尾。

![img](https://btholt.github.io/complete-intro-to-computer-science/a29c0dd0186d1f8cef3c5ebdedf3e5a3/mergesort.gif)

### 代码实现
```js
const mergeSort = (nums) => {
  // base case
  if (nums.length < 2) {
    return nums;
  }

  // you can be more clever about this code but I wanted it
  // to be readable to you
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // merge takes two sorted lists and returns one sorted list
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const results = [];

  // go until one list runs outs
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes the first element in an array and returns it
      // it's like .pop() for the front
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // either left or right will be empty so you can safely concat both
  return results.concat(left, right);
};
```
### 步骤解析
```
mergeSort([1, 5, 7, 4, 2, 3, 6]) -- depth 0

mergeSort([1, 5, 7, 4]) // mergeSort([2, 3, 6]) -- depth 1

mergeSort([1, 5]) // mergeSort([7, 4]) -- depth 2

mergeSort([1]) // mergeSort([5]) -- depth 3
[1] is of length one. Base case. Return sorted list [1] -- depth 3

mergeSort([5]) -- depth 3
[5] is of length one. Base case. Return sorted list [5] -- depth 3

merge([1], [5]) -- depth 3
Is 1 or 5 smaller? 1. Add to end. [1]
Left array is empty, concat right array. [1, 5]
Return sorted array [1, 5].

mergeSort([7, 4]) -- depth 2

mergeSort([7]) // mergeSort([4]) -- depth 3
[7] is of length one. Base case. Return sorted list [7] -- depth 3

mergeSort([4]) -- depth 3
[4] is of length one. Base case. Return sorted list [4] -- depth 3

merge([7], [4]) -- depth 3
Is 7 or 4 smaller? 4. Add to end. [4]
Right array is empty, concat left array. [4, 7]
Return sorted array [4, 7]

merge([1, 5], [4, 7]) -- depth 2
Is 1 or 4 smaller? 1. Add to end. [1]
Is 5 or 4 smaller? 4. Add to end. [1, 4]
Is 5 or 7 smaller? 5. Add to end. [1, 4, 5]
Left array is empty, concat right array. [1, 4, 5, 7]
Return sorted array [1, 4, 5, 7]

mergeSort([2, 3, 6]) -- depth 1

mergeSort([2, 3]) // mergeSort([6]) -- depth 2

mergeSort([2]) // mergeSort([3]) -- depth 3
[2] is of length one. Base case. Return sorted list [2]

mergeSort([3]) -- depth 3
[3] is of length one. Base case. Return sorted list [3]

merge([2], [3]) -- depth 3
Is 2 or 4 smaller? 2. Add to end. [2]
Left array is empty, concat right array. [2, 3]
Return sorted array [2, 4]

mergeSort([6]) -- depth 2
[6] is of length one. Base case. Return sorted list [6]

merge([2, 3], [6]) -- depth 2
Is 2 or 6 smaller? 2. Add to end. [2]
Is 3 or 6 smaller? 3. Add to end. [2, 3]
Left array is empty, concat right array. [2, 3, 6]
Return sorted array [2, 3, 6]

merge([1, 4, 5, 7], [2, 3, 6]) -- depth 1
Is 1 or 2 smaller? 1. Add to end. [1]
Is 4 or 2 smaller? 2. Add to end. [1, 2]
Is 4 or 3 smaller? 3. Add to end. [1, 2, 3]
Is 4 or 6 smaller? 4. Add to end. [1, 2, 3, 4]
Is 5 or 6 smaller? 5. Add to end. [1, 2, 3, 4, 5]
Is 7 or 6 smaller? 6. Add to end. [1, 2, 3, 4, 5, 6]
Right array is empty, concat left array. [1, 2, 3, 4, 5, 6, 7]
Return sorted list [1, 2, 3, 4, 5, 6, 7]
```

***

## 快速排序

1. 从数列中挑出一个元素，称为 "基准"（pivot）;

2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；

3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；
![img](https://btholt.github.io/complete-intro-to-computer-science/d4e5d0a778dba725091d8317e6bac939/quicksort.gif)
### 代码实现
```js
function quickSort(nums) {
  // base case, arrays of length 0 or 1 are sorted already
  if (nums.length <= 1) return nums;

  // last number is the pivot
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  // sort all smaller numbers than the pivot into left
  // and all bigger numbers into right
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  // call quick sort on left and right
  // concat all into one big array with pivot in the middle
  return [...quickSort(left), pivot, ...quickSort(right)];
  // the below is equivalent
  // return quickSort(left).concat(pivot, quickSort(right))
}
```
### 步骤解析
```
[4,9,3,5] list
-> 5 is made the pivot since it's the last in the array
-> divide list into two lists, [4,3] and [9]
-> call quicksort on those two lists

[4, 3]
-> 3 is pivot
-> call quicksort on [] and [4]
-> those both return as is as they are the base case of length 0 or 1
-> concat [], 3, and [4]
-> return [3,4]

[9]
-> returns as this it is a base case of length 1

(back into the original function call)
-> call concat on [3,4], 5, and [9]
-> return [3,4,5,9]
```

The sort is **destructive** since we work on the array itself and the sort can be **stable** as long as you program it so that they stay in order during the insertions.

# 非比较排序

## 基数排序

基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。

![img](https://www.runoob.com/wp-content/uploads/2019/03/radixSort.gif)


```js
function getDigit(number, place, longestNumber) {
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

function findLongestNumber(array) {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}

function radixSort(array) {
  const longestNumber = findLongestNumber(array);

  const buckets = new Array(10).fill().map(() => []); // make an array of 10 arrays

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

```

if we had the list of [109, 224, 901, 58] after the first was we would have [901, 224, 58, 109]. Then we would sort on the tens place, ending up with [901, 109, 224, 58]. Then we'd sort by the hundreds, getting [58, 109, 224, 901]. And now we're sorted! Magic! It's a bit mind-bending but it does work! And honestly it's that simple.

# 二分查找 (Binary Search)
```
[0, 5, 10, 12, 15, 19, 21, 22, 24, 30]

search for 12

start in the middle, is 19 === 12? no, smaller, go left

look in the middle of the smaller half, 10 === 12? no, larger, go right

look in the middle of the larger half (which is now just one number), is 12 === 12? yes, found element
```

```js
function binarySearch(id, array) {
  let min = 0;
  let max = array.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }

  return void 0;
}
```