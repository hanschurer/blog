---
title: 递归排序 Recursive Sorts
description: 并归排序，快速排序
tags:
  - 排序算法
image: ""
slug: "/iterative-sorts/"
noComments: true
---

## 并归排序

Compare two items in an array that are next to each other. If they're out of order (that is, the larger one comes first in the array) swap them. 

![img](https://btholt.github.io/complete-intro-to-computer-science/a29c0dd0186d1f8cef3c5ebdedf3e5a3/mergesort.gif)

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
### 破坏性 Destructive
因为我们对数组本身进行操作，所以我们会说这种排序是破坏性的。如果除了已排序的数组之外还需要保留原始数组怎么办？您不能使用这种排序方法，否则您必须先发制人地进行复制。其他排序算法是非破坏性的。

### 稳定性 Stable
要被视为稳定排序，排序必须保证如果两个事物相等，它们保持相同的顺序。例如，如果我们有一个看起来像这样的用户数组：[{state: "CO", name: "Sarah Drasner"}, {state: "CA", name: "Shirley Wu"}, {state: "CA", name: "Scott Moss"}]并且我们按州排序，我们必须保证 Shirley 出现在 Scott 之前，这样排序才能被认为是稳定的。



***

## 快速排序

With insertion sort, you treat the first part of your list as sorted and the second part of your list as unsorted. Our algorithm will start by saying everything the 1 index (so just index 0, the first element) is sorted and everything after unsorted. By definition a list of one is already sorted. From there, we start with the next element in the list (in this case, the 1 index, the second element) and loop backwards over our sorted list, asking "is the element that I'm looking to insert larger than what's here? If not, you work your way to the back of the array. If you land at the first element of the sorted part of the list, what you have is smaller than everything else and you put it at the start. You then repeat this until you've done it over the whole list!

![img](https://btholt.github.io/complete-intro-to-computer-science/d4e5d0a778dba725091d8317e6bac939/quicksort.gif)

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