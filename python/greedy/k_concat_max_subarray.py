# 1191. K-Concatenation Maximum Sum

MOD = 1_000_000_007


class KConcatMax:

    def __init__(self, arr, k):
        self.arr = arr
        self.k = k

    def calculate(self):

        total_sum = sum(self.arr)

        # Best subarray completely inside one copy
        max_sub = self.kadanes()

        # Only one copy
        if self.k == 1:
            return max_sub % MOD

        max_prefix, max_suffix = self.get_maxes()

        # Two possibilities:
        # 1. Best subarray is inside one copy
        # 2. Best subarray crosses the boundary
        ans = max(max_sub, max_prefix + max_suffix)

        # If total sum is positive, middle copies are useful
        if total_sum > 0:
            ans = max(
                ans,
                max_prefix
                + max_suffix
                + (self.k - 2) * total_sum
            )

        return ans % MOD

    def kadanes(self):

        current = 0
        maximum = 0

        for num in self.arr:
            current = max(0, current + num)
            maximum = max(maximum, current)

        return maximum

    def get_maxes(self):

        # Maximum prefix
        prefix_sum = 0
        max_prefix = 0

        for num in self.arr:
            prefix_sum += num
            max_prefix = max(max_prefix, prefix_sum)

        # Maximum suffix
        suffix_sum = 0
        max_suffix = 0

        for num in reversed(self.arr):
            suffix_sum += num
            max_suffix = max(max_suffix, suffix_sum)

        return max_prefix, max_suffix


def kConcatenationMaxSum(arr, k):
    return KConcatMax(arr, k).calculate()


print(kConcatenationMaxSum([1, 2], 3))                  # 9
print(kConcatenationMaxSum([1, -2, 1], 5))              # 2
print(kConcatenationMaxSum([-5, 4, -4, -3, 5, -3], 3)) # 5