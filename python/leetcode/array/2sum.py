from typing import List

def twoSum(nums,target):
    seen = {}  

    for i, num in enumerate(nums):
        comp = target - num
        if comp in seen:
            return [seen[comp], i]
        seen[num] = i

    return []

def twoSumPointer(nums,target):
    nums.sort()

    n = len(nums)
    left = 0
    right = n-1

    while(left < right):
        currSum = nums[left] + nums[right]

        if(currSum==target):
            return [left,right]
        elif (currSum<target):
            left += 1
        else:
            right -= 1
            
    return [-1,-1]



print(twoSumPointer([2, 7, 11, 15], 9))   
print(twoSumPointer([3, 2, 4], 6))        
print(twoSumPointer([3, 3], 6))           
