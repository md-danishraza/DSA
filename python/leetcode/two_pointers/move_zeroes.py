
# // L - 283
# 
#  Do not return anything, modify nums in-place instead.
#  
# Move all the 0's to the end of array.
# All the non-zero elements must retain their original order.
def moveZeroes(nums):
    # pointer location for next non zero element 
    left = 0

    for right,value in enumerate(nums):
        
        # if non zero then swap with left
        if(value!=0):
            # swap with last left position
            nums[left],nums[right] = nums[right],nums[left]
            # increase left
            left += 1

    
    print(nums)


moveZeroes([1,2,0,0,3,0,5])