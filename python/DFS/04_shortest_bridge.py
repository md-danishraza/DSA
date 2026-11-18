from collections import deque

# tc = n2 (bfs + dfs)
# l - 934

# 934. Shortest Bridge
# You are given an n x n binary matrix grid where 1 represents land and 0 represents water.
# An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.
# You may change 0's to 1's to connect the two islands to form one island.
# Return the smallest number of 0's you must flip to connect the two islands.

class Solution:
    def shortestBridge(self, grid: list[list[int]]) -> int:
        N = len(grid)
        dirs = [(0,1),(0,-1),(1,0),(-1,0)]
        
        def invalid(r,c):
            return r < 0 or c<0 or r==N or c==N
        # will be used as initial queue for bfs
        # dfs will find the initial islands (fill 1s)
        # two things done by this visited set 
        visited = set()
        def dfs(r,c):
            if invalid(r,c) or not grid[r][c] or (r,c) in visited:
                return
            
            visited.add((r,c))
            
            for dr,dc in dirs:
                dfs(r+dr,c+dc)
                
        def bfs():
            res,q = 0,deque(visited)
            while q:
                # get current level size
                for i in range(len(q)):
                    r,c = q.popleft()
                    # add directions
                    for dr,dc in dirs:
                        cur_r,cur_c = r+dr,c+dc
                        # if invalid or already visited(first island)
                        if invalid(cur_r,cur_c) or (cur_r,cur_c) in visited:
                            continue
                        # if its a unvisited 1 then we have to reached second island
                        if grid[cur_r][cur_c]:
                            return res
                        # else append this node
                        q.append((cur_r,cur_c))
                        visited.add((cur_r,cur_c))
                
                # increase level
                res += 1     
                            
            
            
            
        
        for r in range(N):
            for c in range(N):
                # if its a 1 call it
                if grid[r][c]:
                    # dfs to fill 1s and add to queue
                    # only to find first land
                    dfs(r,c)
                    # dfs to add next neighbors (level = step)
                    return bfs() 
        
    
    
    
sol = Solution()

print(sol.shortestBridge([[0,1,0],[0,0,0],[0,0,1]]))
print(sol.shortestBridge([[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]))