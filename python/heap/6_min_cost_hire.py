import heapq

# tc = nlogn + nlogk
# sc = On
def min_cost_hire(quality,wage,k):
    res = float("inf")

    # ratio,quality
    pairs = []
    for i in range(len(quality)):
        pairs.append((wage[i]/quality[i],quality[i]))
    # sort asc using ratio
    pairs.sort(key=lambda x:x[0])

    # quality 
    maxHeap = []
    # per window (k)
    total_quality = 0
    for ratio,q in pairs:
        # using -ve (heapq is minheap by default)
        heapq.heappush(maxHeap,-q)
        total_quality += q

        # remove largest quality 
        if(len(maxHeap)>k):
            quality = -heapq.heappop(maxHeap)
            # subtract this worker quality from group
            total_quality -= quality

        # if window == k
        if(len(maxHeap)==k):
            # update res with min cost 
            res = min(
                res,
                # since its the last element in k window 
                # its ratio will be the larges in group
                # and we have to pay all worker in equal proportion
                total_quality * ratio
            )

    return res

print(min_cost_hire([10,20,5],[70,50,30],2))