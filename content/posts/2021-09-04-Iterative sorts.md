---
title: 迭代排序 Iterative Sorts
description: 包括冒泡排序和插入排序
tags:
  - 排序算法
image: ""
slug: "/iterative-sorts/"
noComments: true
---

## 冒泡排序

Compare two items in an array that are next to each other. If they're out of order (that is, the larger one comes first in the array) swap them. 
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
### 破坏性 Destructive
因为我们对数组本身进行操作，所以我们会说这种排序是破坏性的。如果除了已排序的数组之外还需要保留原始数组怎么办？您不能使用这种排序方法，否则您必须先发制人地进行复制。其他排序算法是非破坏性的。

### 稳定性 Stable
要被视为稳定排序，排序必须保证如果两个事物相等，它们保持相同的顺序。例如，如果我们有一个看起来像这样的用户数组：[{state: "CO", name: "Sarah Drasner"}, {state: "CA", name: "Shirley Wu"}, {state: "CA", name: "Scott Moss"}]并且我们按州排序，我们必须保证 Shirley 出现在 Scott 之前，这样排序才能被认为是稳定的。



***

## 插入排序 

With insertion sort, you treat the first part of your list as sorted and the second part of your list as unsorted. Our algorithm will start by saying everything the 1 index (so just index 0, the first element) is sorted and everything after unsorted. By definition a list of one is already sorted. From there, we start with the next element in the list (in this case, the 1 index, the second element) and loop backwards over our sorted list, asking "is the element that I'm looking to insert larger than what's here? If not, you work your way to the back of the array. If you land at the first element of the sorted part of the list, what you have is smaller than everything else and you put it at the start. You then repeat this until you've done it over the whole list!


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