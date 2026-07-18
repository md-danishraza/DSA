#  L - 845

def longestMountain(arr):
    n = len(arr)
    ans = 0
    i = 1

    while i < n:
        up = down = 0

        while i < n and arr[i] > arr[i - 1]:
            up += 1
            i += 1

        while i < n and up and arr[i] < arr[i - 1]:
            down += 1
            i += 1

        if up and down:
            ans = max(ans, up + down + 1)

        while i < n and arr[i] == arr[i - 1]:
            i += 1

        # Prevent infinite loop
        if up == 0 and down == 0:
            i += 1

    return ans





print(longestMountain([2, 1 ,4 ,7 ,3, 2 ,5]))