


import math


def minSubArrayLen(target,nums):

    n = len(nums)

    left = 0
    right = 0

    currSum = 0
    MinLength = math.inf

    while(right<n):
        currSum += nums[right]

        while(currSum>=target):
            MinLength = min(MinLength,right-left+1)
            currSum -= nums[left]
            left += 1

        right += 1

    return 0 if MinLength == math.inf else MinLength


print(minSubArrayLen(7,[2,3,1,2,4,3]))