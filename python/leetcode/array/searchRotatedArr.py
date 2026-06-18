
def searchRotated(nums,target):
    s = 0
    e = len(nums) -1


    while (s <= e):
        mid = (s + e) // 2
        if (nums[mid] == target): return mid

        if (nums[s] <= nums[mid]):
            #  Left half is sorted
            if (nums[s] <= target <= nums[mid]):
                e = mid - 1
            else:
                s = mid + 1
        
        else:
            #  Right half is sorted
            if (nums[mid] <= target <= nums[e]):
                s = mid + 1
            else:
                e = mid - 1
    return -1


print(searchRotated([4, 5, 6, 7, 0, 1, 2], 0))