
# 1254. Number of Closed Islands

class Solution:
    def closedIsland(self, grid: list[list[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        # 1 water land
        # 0 island 
        # count no. of closed island
        
        visited = set()
        
        # start from edges and floodfill
        # island on edges can never closed
        
        def dfs(r,c):
            # its a open island either on edge or out of bound
            if(r < 0 or r == m or 
                c < 0 or c == n):
                return 0
            
            # if this is and water or already visited 
            # then its inside close island
            if grid[r][c] == 1 or (r,c) in visited:
                return 1
            
            # mark visited
            visited.add((r,c))
            
            # run dfs on all four neighbors
            up = dfs(r - 1, c)
            down = dfs(r + 1, c)
            left = dfs(r, c - 1)
            right = dfs(r, c + 1)
            # if closed than all four will return 1
            return min(up,down,left,right)
            
                
            
        count = 0
        
        for r in range(m):
            for c in range(n):
                # if unvisited island
                if(not grid[r][c] and not (r,c) in visited):
                    # return 1 if closed island
                    res = dfs(r,c)
                    count += res
                    
        return count
                

sol = Solution()

print(sol.closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]))