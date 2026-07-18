#  L - 283
def maxArea(height):

    left = 0
    right = len(height) - 1

    ans = 0

    while left < right:

        width = right - left
        h = min(height[left], height[right])

        ans = max(ans, width * h)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return ans


print(maxArea([1,8,6,2,5,4,8,3,7]))
print(maxArea([1,1]))