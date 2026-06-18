
def canJump(nums):
    maxReach = 0

    for i,jump in enumerate(nums):
        if i>maxReach: return False

        # update the reach index
        maxReach = max(maxReach,i+jump)

    True

print(canJump([3,2,1,0,4]))
print(canJump([2,3,1,1,4]))