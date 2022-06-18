---
title: Blind75 Leetcode solution
description: 已解决的leetcode题目 
tags:
  - 刷题
image: ""
slug: "/leetcode-solution/"
noComments: true
---

## 1. 两数之和

``` py
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map={}
        for i,v in enumerate(nums):
            diff=target-v
            if diff in map:
                return [map[diff],i]
            map[v]=i
```

## 3. 无重复字符的最长子串

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charset=set()
        l=0
        res=0

        for r in range(len(s)):
            while s[r] in charset:
                charset.remove(s[l])
                l+=1
            charset.add(s[r])
            res=max(res,r-l+1)
        return res
```

## 20. 有效的括号

```py
class Solution:
    def isValid(self, s: str) -> bool:
        stack=[]
        mapper={'{':'}','[':']','(':')'}
        balanced=True
        
        for i in s:
            if i in mapper:
                stack.append(i)
            else:
                if len(stack)!=0:
                    peak=stack.pop()
                    if i!=mapper[peak]:
                        return False
                else:
                    return False
        
        if len(stack)>0: return False

        return balanced
```
## 21. 合并两个有序链表

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy=ListNode()
        tail=dummy
        while list1 and list2:
            if list1.val<list2.val:
                tail.next=list1
                list1=list1.next
            else:
                tail.next=list2
                list2=list2.next
            tail=tail.next

        if list1:
            tail.next=list1
        elif list2:
            tail.next=list2
            
        return dummy.next
```

## 36. [有效的数独](https://leetcode.cn/problems/valid-sudoku/)

```py
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row=defaultdict(set)
        col=defaultdict(set)
        square=defaultdict(set)

        for i in range(9):
            for v in range(9):
                if board[i][v] == ".":
                    continue
                if (board[i][v] in row[i] or board[i][v] in col[v] or board[i][v] in square[(i//3,v//3)] ):
                    return False
                row[i].add(board[i][v])
                col[v].add(board[i][v])
                square[(i//3,v//3)].add(board[i][v])
        return True
```

## 49. [字母异位词分组](https://leetcode.cn/problems/group-anagrams/submissions/)

```py
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = defaultdict(list)
        
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            ans[tuple(count)].append(s)
        return list(ans.values())
```

## 104. [二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        q=deque([root])
        level=0

        while q:

            for i in range(len(q)):
                node=q.popleft()
                if  node.left:
                    q.append(node.left)
                if  node.right:
                    q.append(node.right)
            level+=1

        return level
```

## 121.[买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)

```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy=0
        maxp=0

        for sell in range(1,len(prices)):
            if prices[sell] < prices[buy]:
                buy=sell
            maxp=max(maxp,prices[sell]-prices[buy])
        return maxp
```

## 125. [验证回文串](https://leetcode.cn/problems/valid-palindrome/)
```py
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            while l < r and not s[l].isalnum(): 
                l += 1
            while l < r and not s[r].isalnum(): 
                r -= 1
            if s[l].lower() != s[r].lower(): 
                return False
            l += 1
            r -= 1
        return True
    
    # Could write own alpha-numeric function
    def alphanum(self, c):
        return (ord('A') <= ord(c) <= ord('Z') or
                ord('a') <= ord(c) <= ord('z') or
                ord('0') <= ord(c) <= ord('9'))
                     
```

## 128. [最长连续序列](https://leetcode.cn/problems/longest-consecutive-sequence/)

```py
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums=set(nums)
        longest=0

        for i in nums:
            if i-1 not in nums:
                length=1
                while (i+length) in nums:
                    length+=1
                longest=max(length,longest)
        return longest
```

## 167. [两数之和 II - 输入有序数组](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)

```py
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l,r=0,len(numbers)-1

        while l<r:
            sum=numbers[l]+numbers[r]
            if sum>target:
                r-=1
            elif sum< target:
                l+=1
            else:
                return [l+1,r+1]
```

## 226. [翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        root.left,root.right=root.right,root.left
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root
```

## 238. [除自身以外数组的乘积]()

```py
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res=[1]*len(nums)
        prefix=1
        for i in range(len(nums)):
            res[i]=prefix
            prefix*=nums[i]
        postfix=1
        for i in range(len(nums)-1,-1,-1):
            res[i]*=postfix
            postfix*=nums[i]
        return res
```

## 543. [二叉树的直径](https://leetcode.cn/problems/diameter-of-binary-tree/)

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res=[0]

        def dfs(root):
            if not root:
                return -1
            left=dfs(root.left)
            right=dfs(root.right)
            res[0]=max(res[0],2+left+right)

            return 1+max(left,right)
    
    
        dfs(root)
        return res[0]

```

## 703. [数据流中的第 K 大元素](https://leetcode.cn/problems/kth-largest-element-in-a-stream/)

```py
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.miniHeap,self.k=nums,k
        heapq.heapify(self.miniHeap)

        while len(self.miniHeap) >self.k:
            heapq.heappop(self.miniHeap)


    def add(self, val: int) -> int:
        heapq.heappush(self.miniHeap,val)
        while len(self.miniHeap)>self.k:
            heapq.heappop(self.miniHeap)
        return self.miniHeap[0]



# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
```

## 704. [二分查找](https://leetcode.cn/problems/binary-search/)

```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l,r=0,len(nums)-1
        while l<= r:
            m = (l+r)//2
            if nums[m]<target:
                l=m+1
            elif nums[m]>target:
                r=m-1
            else:
                return m
        return -1
```

## 1046. [最后一块石头的重量]

```py
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones=[-s for s in stones]
        heapq.heapify(stones)

        while len(stones) >1:
            first=heapq.heappop(stones)
            second=heapq.heappop(stones)
            if second > first:
                heapq.heappush(stones,first-second)
        
        stones.append(0)
        return abs(stones[0])
```

## 217. [存在重复元素](https://leetcode.cn/problems/contains-duplicate/submissions/)

```py
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset=set()
        for i in nums:
            if i in hashset:
                return True
            hashset.add(i)
        return False
```

## 206. [反转链表](https://leetcode.cn/problems/reverse-linked-list/)

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        pre, cur= None, head
        while cur:
            nxt=cur.next
            cur.next=pre
            pre=cur
            cur=nxt
        return pre
```

## 242. [有效的字母异位词](https://leetcode.cn/problems/valid-anagram/)

```py
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        map1={}
        map2={}
        for i in s:
            if i in map1:
                map1[i]+=1
            else:
                map1[i]=1
        for v in t:
            if v in map2:
                map2[v]+=1
            else:
                map2[v]=1

        if map1 == map2:
            return True
        else:
            return False      
```

