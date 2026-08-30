import heapq

def skyline(buildings):
    events = []

    for left, right, height in buildings:
        # entering event
        events.append([left, height, right])
        # leaving event
        events.append([right, 0, None])

    # sort by x, then by height (enter before leave)
    events.sort(key=lambda x: (x[0], -x[1]))

    heap = [(0, float("inf"))]  # (neg_height, right)
    ans = []
    curr_max = 0

    for x, height, right in events:
        if height > 0:  # entering
            heapq.heappush(heap, (-height, right))

        # remove expired buildings
        while heap and heap[0][1] <= x:
            heapq.heappop(heap)

        # current max height
        new_max = -heap[0][0] if heap else 0

        if new_max != curr_max:
            ans.append([x, new_max])
            curr_max = new_max

    return ans

print(skyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]))
