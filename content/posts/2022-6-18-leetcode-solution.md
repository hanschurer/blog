---
title: Blind75-Leetcode Solution
description: 已解决的leetcode题目
tags:
  - 刷题
slug: /leetcode-solution/
image: ""
noComments: true
date: 2022-06-18T20:26:45.605Z
---
## [1. 两数之和](https://leetcode.cn/problems/two-sum/)

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map={}
        for i,v in enumerate(nums):
            diff=target-v
            if diff in map:
                return [map[diff],i]
            map[v]=i
```

## [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

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

## [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)

```python
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

## [21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)

```python
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

```python
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

```python
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

```python
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

```python
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

```python
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

```python
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

```python
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

```python
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

## 238. [除自身以外数组的乘积](<>)

```python
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

```python
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

```python
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

```python
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

## 1046. [最后一块石头的重量](https://leetcode.cn/problems/last-stone-weight/)

```python
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

```python
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

```python
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

```python
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

## 347. [前 K 个高频元素](https://leetcode.cn/problems/top-k-frequent-elements/)

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]
        
        for n in nums:
            count[n] = 1 + count.get(n, 0)
        for n, c in count.items():
            freq[c].append(n)
        
        res = []
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res
```

## 659[. 编码和解码字符串](https://www.lintcode.com/problem/659/description)

```python
class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs):
        # write your code here
        res=""
        for i in strs:
            res+= str(len(i))+"#"+i
        return res

    """
    @param: str: A string
    @return: dcodes a single string to a list of strings
    """
    def decode(self, str):
        # write your code here
        res,i=[],0
        while i < len(str):
            j=i
            while str[j] != "#":
                j+=1
            length= int(str[i:j])
            res.append(str[j+1:j+1+length])
            i=j+1+length
        return res
```

## 53. [最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSub=nums[0]
        curSub=0

        for i in nums:
            if curSub<0:
                curSub=0
            curSub+=i
            maxSub=max(maxSub,curSub)
        return maxSub
```

## [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        one=two=1
        for i in range(n-1):
            one,two=one+two,one
        return one
```

## [198. 打家劫舍](https://leetcode.cn/problems/house-robber/)

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        rob1=rob2=0
        for i in nums:
            rob1,rob2=rob2,max(rob1+i,rob2)
        return rob2
```

## [15. 三数之和](https://leetcode.cn/problems/3sum/)

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        
        for i, a in enumerate(nums):
            if i > 0 and a == nums[i - 1]:
                continue
            
            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1
        return res
```

## [155. 最小栈](https://leetcode.cn/problems/min-stack/)

```python
class MinStack:

    def __init__(self):
        self.stack=[]
        self.minStack=[]


    def push(self, val: int) -> None:
        self.stack.append(val)
        val= min(val,self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)


    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()


    def top(self) -> int:
        return self.stack[-1]


    def getMin(self) -> int:
        return self.minStack[-1]



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
```

## [11. 盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/)

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l,r=0,len(height)-1
        res=0

        while l<r:
            res = max(res, min(height[l], height[r]) * (r - l))
            if height[l]<height[r]:
                l+=1
            else:
                r-=1
        return res
```

## [42. 接雨水](https://leetcode.cn/problems/trapping-rain-water/)

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        if not height: return 0

        l,r=0,len(height)-1
        maxLeft,maxRight=height[l],height[r]
        res=0

        while l<r:
            if maxLeft < maxRight:
                l+=1
                maxLeft=max(maxLeft,height[l])
                res+=maxLeft-height[l]
            
            else:
                r-=1
                maxRight=max(maxRight,height[r])
                res+=maxRight-height[r]
        return res
```

## [74. 搜索二维矩阵](https://leetcode.cn/problems/search-a-2d-matrix/)

```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        ROWS,COLS=len(matrix), len(matrix[0])
        top, bot= 0, ROWS-1
        while top<=bot:
            midrow=(top+bot)//2
            if target > matrix[midrow][-1]:
                top= midrow +1
            elif target < matrix[midrow][0]:
                bot = midrow -1
            else:
                break
        
        if not top<= bot: return False

        midrow=(top+bot)//2
        l,r=0,COLS-1
        while l<=r:
            m=(l+r)//2
            if target > matrix[midrow][m]:
                l= m+1
            elif target< matrix[midrow][m]:
                r= m-1
            else:
                return True
        return False
```

## [875. 爱吃香蕉的珂珂](https://leetcode.cn/problems/koko-eating-bananas/)

```python
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l,r=1,max(piles)
        res=r
        while l<=r:
            k=(l+r)//2
            hours=0
            for i in piles:
                hours+= math.ceil(i/k)
            if hours<=h:
                res=min(res,k)
                r= k -1
            else:
                l=k+1
        return res
```

## [110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def dfs(root):
            if not root: return [True, 0]
            
            left,right=dfs(root.left),dfs(root.right)
            isBalanced= left[0] and right[0] and abs(left[1]-right[1]) <=1
            return [isBalanced,1+max(left[1],right[1])]

        return dfs(root)[0]
```

## [100. 相同的树](https://leetcode.cn/problems/same-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if not p and not q:
            return True
        if not p or not q or p.val != q.val:
            return False
        
        return (self.isSameTree(p.left,q.left) and self.isSameTree(p.right, q.right))
```

## [572. 另一棵树的子树](https://leetcode.cn/problems/subtree-of-another-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: TreeNode, subRoot: TreeNode) -> bool:
        if not subRoot: return True
        if not root: return False
        return self.isSameTree(root,subRoot) or self.isSubtree(root.left,subRoot) or self.isSubtree(root.right,subRoot)

    
    def isSameTree(self,root,subRoot):
        if not root and not subRoot: return True
        if subRoot and root and root.val== subRoot.val:
            return (self.isSameTree(subRoot.left,root.left) and self.isSameTree(root.right,subRoot.right))
        return False
```

## [235. 二叉搜索树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        cur=root
        while cur:
            if p.val > cur.val and q.val > cur.val:
                cur=cur.right
            elif p.val<cur.val and q.val < cur.val:
                cur=cur.left
            else:
                return cur
```

## [62. 不同路径](https://leetcode.cn/problems/unique-paths/)

```python
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[1]*n] + [[1]+[0] * (n-1) for _ in range(m-1)]
        for i in range(1,m):
            for j in range(1,n):
                dp[i][j]=dp[i-1][j]+dp[i][j-1]
        return dp[-1][-1]
```

## [1143. 最长公共子序列](https://leetcode.cn/problems/longest-common-subsequence/)

```python
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        len1, len2 = len(text1)+1, len(text2)+1
        dp = [[0 for _ in range(len1)] for _ in range(len2)] # 先对dp数组做初始化操作
        for i in range(1, len2):
            for j in range(1, len1): # 开始列出状态转移方程
                if text1[j-1] == text2[i-1]:
                    dp[i][j] = dp[i-1][j-1]+1 
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        return dp[-1][-1]
```

## [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res=[]
        q=collections.deque()
        q.append(root)

        while q:
            qlenth=len(q)
            level=[]
            for i in range(qlenth):
                node=q.popleft()
                if node:
                    level.append(node.val)
                    q.append(node.left)
                    q.append(node.right)
            if level:
                res.append(level)
        return res
```

## [150. 逆波兰表达式求值](https://leetcode.cn/problems/evaluate-reverse-polish-notation/)

```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack=[]
        for c in tokens:
            if c =="+":
                stack.append(stack.pop()+stack.pop())
            elif c == "-":
                a,b=stack.pop(),stack.pop()
                stack.append(b-a)
            elif c == "/":
                a,b=stack.pop(),stack.pop()
                stack.append(int(b/a))
            elif c== "*":
                stack.append(stack.pop()*stack.pop())
            else:
                stack.append(int(c))

        return stack[0]
```

## [739. 每日温度](https://leetcode.cn/problems/daily-temperatures/)

```python
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = [] # pair (temp,index)

        for index, temp in enumerate(temperatures):
            while stack and temp > stack[-1][0]:
                stackTemp, stackIndx= stack.pop()
                res[stackIndx] = (index-stackIndx)
            stack.append([temp,index])
        return res
```

## [22. 括号生成](https://leetcode.cn/problems/generate-parentheses/)

```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        stack=[]
        res=[]

        def backtrack(openN,closeN):
            if openN == closeN ==n:
                res.append("".join(stack))
            if openN < n:
                stack.append('(')
                backtrack(openN+1,closeN)
                stack.pop()
            if closeN<openN:
                stack.append(')')
                backtrack(openN,closeN+1)
                stack.pop()
        backtrack(0,0)
        return res
```

## [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        
        while l <= r:
            mid = (l + r) // 2
            if target == nums[mid]:
                return mid
            
            # left sorted portion
            if nums[l] <= nums[mid]:
                if target > nums[mid] or target < nums[l]:
                    l = mid + 1
                else:
                    r = mid - 1
            # right sorted portion
            else:
                if target < nums[mid] or target > nums[r]:
                    r = mid - 1
                else:
                    l = mid + 1
        return -1
```

## [153. 寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)

```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        res=nums[0]
        l,r=0, len(nums)-1

        while l<=r:
            if nums[l] <nums[r]:
                res=min(res,nums[l])
                break

            mid=(l+r)//2
            res = min(res, nums[mid])
            if nums[mid]>=nums[l]:
                l=mid+1
            else:
                r=mid-1
        return res
```

## [424. 替换后的最长重复字符](https://leetcode.cn/problems/longest-repeating-character-replacement/)

```python
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count={}
        res=0
        l=0
        for r in range(len(s)):
            count[s[r]]=1+ count.get(s[r],0)
            while (r-l+1)-max(count.values())>k:
                count[s[l]]-=1
                l+=1
            res=max(res,r-l+1)
        return res
```

## [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        f=s=head

        while f and f.next:
            f=f.next.next
            s=s.next
            if f == s:
                return True
        return False
```

## [143. 重排链表](https://leetcode.cn/problems/reorder-list/)

```python
class Solution:
    def reorderList(self, head: ListNode) -> None:
        if not head:
            return
        
        mid = self.middleNode(head)
        l1 = head
        l2 = mid.next
        mid.next = None
        
        l2 = self.reverseList(l2)
        self.mergeList(l1, l2)
    
    def middleNode(self, head: ListNode) -> ListNode:
        slow = fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        return slow
    
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        while curr:
            nextTemp = curr.next
            curr.next = prev
            prev = curr
            curr = nextTemp
        return prev

    def mergeList(self, l1: ListNode, l2: ListNode):
        while l1 and l2:
            l1_tmp = l1.next
            l2_tmp = l2.next

            l1.next = l2
            l1 = l1_tmp

            l2.next = l1
            l2 = l2_tmp

```

## [19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(0,head)
        left=dummy
        right = head
        for i in range(n):
            right = right.next
        while right:
            left=left.next
            right=right.next
        
        left.next=left.next.next
        return dummy.next
            
```

## [23. 合并K个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
    
        def merge(l,r):
            if l>r:
                return 
            if l == r:
                return lists[l]
            mid = (l+r)//2
            l1 = merge(l,mid)
            l2 = merge(mid+1,r)
            return mergeList(l1,l2)
        

        def mergeList(l1, l2):
            dummy = ListNode()
            tail = dummy
            
            while l1 and l2:
                if l1.val < l2.val:
                    tail.next = l1
                    l1 = l1.next
                else:
                    tail.next = l2
                    l2 = l2.next
                tail = tail.next

            if l1:
                tail.next = l1
            if l2:
                tail.next = l2

            return dummy.next
        return merge(0,len(lists)-1)
```

## [98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def valid(node,left,right):
            if not node:
                return True
            if not (node.val<right and node.val > left):
                return False
            return (valid(node.left,left,node.val) and valid(node.right, node.val, right))

        return valid(root,float("-inf"), float("inf"))
```

## [230. 二叉搜索树中第K小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)

```python
class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        stack = []
        while root or stack:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            k -= 1
            if k == 0:
                return root.val
            root = root.right

```