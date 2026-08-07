from collections import Counter

# L - 659
def isPossible(nums):
    # How many unused copies of each number?
    available = Counter(nums)

    # How many subsequences are waiting for each number?
    need = Counter()

    for num in nums:

        # This number has already been completely used
        if available[num] == 0:
            continue

        # --------------------------------
        # 1. Extend an existing sequence
        # --------------------------------
        if need[num] > 0:

            # Use this number
            available[num] -= 1

            # One sequence no longer needs num
            need[num] -= 1

            # It now needs num + 1
            need[num + 1] += 1

        # --------------------------------
        # 2. Start a new sequence
        # --------------------------------
        elif available[num + 1] > 0 and available[num + 2] > 0:

            # Use num, num+1, num+2
            available[num] -= 1
            available[num + 1] -= 1
            available[num + 2] -= 1

            # [num, num+1, num+2]
            # is now waiting for num+3
            need[num + 3] += 1

        # --------------------------------
        # 3. Can't use this number
        # --------------------------------
        else:
            return False

    return True


print(isPossible([1, 2, 3, 4, 4, 5]))  # False
print(isPossible([1, 2, 3, 3, 4, 5]))  # True
print(isPossible([1, 2, 3, 3, 4, 4, 5, 5]))  # True