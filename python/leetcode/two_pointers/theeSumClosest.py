import math
# //  L - 16

# // Given an integer array nums of length n and an integer target, find three integers at 
# // distinct indices in nums such that the sum is closest to target.
# // Return the sum of the three integers.
# // You may assume that each input would have exactly one solution.

def threeSumClosest(nums, target):
    # sort 
    nums.sort()

    #  closest 
    closestSum = math.inf
    # global min Difference
    minDiff = math.inf

    for i in range(0,len(nums)-2):
        # perform two sum approach
        left = i + 1
        right = len(nums) -1 

        while(left<right):
            sum = nums[i] + nums[left] + nums[right]

            diff = abs(target-sum)
            if(diff<minDiff):
                closestSum = sum
                minDiff = diff

            if sum<target:
                left += 1
            else:
                right -= 1

    return closestSum

print(threeSumClosest([-1,2,1,-4],1))