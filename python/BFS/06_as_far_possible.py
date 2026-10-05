from typing import List
from collections import deque

# l - 1162
# using multisource queue
def maxDistance(grid: list[list[int]]) -> int:
    N = len(grid)
    q = deque()
    
    # append all land 
    # start with all lands 
    for r in range(N):
        for c in range(N):
            if(grid[r][c]):
                q.append((r,c))
    
    # for manhattan distance (no diagonal reach)
    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    res = -1
    
    # visit all neigh(water) and mark (overwrite value) as distance 
    # closest to land
    while q:
        r,c = q.popleft()
        
        res = grid[r][c]
        for dr,dc in dirs:
            newR,newC = r+dr,c+dc
            
            # if within bound and its a water piece
            if(min(newR,newC)>=0 and max(newC,newR)<N and grid[newR][newC]==0):
                 q.append((newR,newC))
                 grid[newR][newC] = res + 1
                 
        
        
    # all land or all water 
    return res-1 if res>1 else -1


print(maxDistance([[1,0,1],[0,0,0],[1,0,1]]))
print(maxDistance([[1,0,0],[0,0,0],[0,0,0]]))