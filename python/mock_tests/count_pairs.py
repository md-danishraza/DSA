from collections import defaultdict

# We need pairs (i, j) such that
# (a[i] + a[j]) % D == 0
# AND
# |a[i] - a[j]| % M == 0

def count_pairs(nums,D,M):

    # map
    freq = defaultdict(int)
    ans = 0

    for num in nums:

        # calc remainders for both nums
        remD = num % D
        remM = num % M

        # needed no. pair with D
        need = (D-remD) % D

        ans += freq[(need,remM)]


        # add current pair
        freq[(remD,remM)] += 1

    return ans


nums = [2,3,7,8]

print(count_pairs(nums,5,2))