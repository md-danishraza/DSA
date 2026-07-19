def findDuplicate(nums):

    # Start both pointers at the first value
    slow = fast = nums[0]

    # Phase 1: Find the intersection point
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]

        if slow == fast:
            break

    # Phase 2: Find the entrance to the cycle
    slow2 = nums[0]

    while slow != slow2:
        slow = nums[slow]
        slow2 = nums[slow2]

    return slow


print(findDuplicate([1,3,4,2,2]))  # 2
print(findDuplicate([3,1,3,4,2]))  # 3
print(findDuplicate([3,1,4,4,2]))  # 4