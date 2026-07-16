from heapq import heappush, heappop

def smallestRange(nums):

    heap = []
    current_max = float("-inf")

    # Put the first element from every list into the heap
    for row, arr in enumerate(nums):
        # storing as tuple (value, row, col)
        heappush(heap, (arr[0], row, 0))
        # finding max for current group
        current_max = max(current_max, arr[0])

    start, end = 0, float("inf")

    # Heap always contains one element from each list
    # till constraint is satisfied
    while len(heap) == len(nums):

        # Smallest element in the current group
        val, row, col = heappop(heap)

        # Better range found
        if current_max - val < end - start:
            start, end = val, current_max

        # Can't continue if one list is exhausted
        if col + 1 == len(nums[row]):
            break

        # Push next element from the same list
        nxt = nums[row][col + 1]
        heappush(heap, (nxt, row, col + 1))

        # Update current maximum
        current_max = max(current_max, nxt)

    return [start, end]


print(smallestRange([[4,10,15,24,26],
                     [0,9,12,20],
                     [5,18,22,30]]))

print(smallestRange([[1,2,3],
                     [1,2,3],
                     [1,2,3]]))