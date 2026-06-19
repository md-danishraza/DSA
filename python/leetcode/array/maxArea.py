


#  1465. Maximum Area of a Piece of Cake After Horizontal and 
# Vertical Cuts

def maxArea(h, w, horizontalCuts, verticalCuts):
    MOD = 10**9 + 7

    # include edges and sort
    horizontalCuts = sorted([0] + horizontalCuts + [h])
    verticalCuts   = sorted([0] + verticalCuts + [w])

    # compute max gaps using generator expressions
    hMaxGap = max(horizontalCuts[i] - horizontalCuts[i-1] for i in range(1, len(horizontalCuts)))
    vMaxGap = max(verticalCuts[i] - verticalCuts[i-1] for i in range(1, len(verticalCuts)))

    return (hMaxGap * vMaxGap) % MOD


print(maxArea(5, 4, [1, 2, 4], [1, 3]))   # 4
print(maxArea(5, 4, [3, 1], [1]))         # 6
print(maxArea(5, 4, [3], [3]))            # 9
