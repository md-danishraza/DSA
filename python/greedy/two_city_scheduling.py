# leetcode - 1029

def twoCity(costs):
    # calculate diff 
    # cost of choosing a over b or vice versa
    diff = []
    for c1,c2 in costs:
        diff.append([c2-c1,c1,c2])

    # sort 
    # greedy approach 
    diff.sort(key=lambda x:x[0])
    # result
    res = 0
    for i,cost in enumerate(diff):
        if(i<len(costs)/2):
            # first half 
            # consider city b
            res += cost[2]
        else:
            # second consider city A
            res += cost[1]

    return res


print(twoCity([[10,20],[30,200],[400,50],[30,20]]))