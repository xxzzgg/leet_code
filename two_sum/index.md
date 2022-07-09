[两数之和](https://leetcode.cn/problems/two-sum/)
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
### 思路一
暴力解法，两个for循环 找到两个数字相加等于target 返回下标

### 思路二

每次循环拿到  target - nums[i]
用Map 记录下来， nums[i] 对应的target - nums[i]的下标
使用哈希表，可以将寻找 target - nums[i] 的时间复杂度降低到从 O(N)O(N) 降低到 O(1)O(1)
每次循环直接判断是否有nums[i] 有即返还对应的value 和 当前 i 