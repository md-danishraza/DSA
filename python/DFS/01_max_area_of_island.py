# l 695

class Solution:
    
    def max_area_of_island(self,grid):
        m = len(grid)
        n = len(grid[0])

        visited = [[False]*n for i in range(m)]
        
        maxArea = 0
        # for each cell perform DFs
        for r in range(m):
            for c in range(n):
                # if encounter an unvisited island
                if(grid[r][c] == 1 and (not visited[r][c])):
                    # call dfs
                    currArea = self.dfs(r,c,grid,visited,m,n)
                    maxArea = max(currArea,maxArea)
                    
        return maxArea
                
    
    # define dfs
    def dfs(self,r,c,grid,visited, m, n):
        # mark visited
        visited[r][c] = True
        
        # if waterland return 0
        if(grid[r][c] == 0):
            return 0 
        
        # visit all four neighbors
        dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        currArea = 1
        for dr,dc in dirs:
            nr = r + dr
            nc = c + dc
            if(nr >= 0 and nr < m and 
                nc >= 0 and nc < n and not visited[nr][nc]):
                currArea += self.dfs(nr,nc,grid,visited,m,n)
        
        return currArea
    
    

sol = Solution()

print(sol.max_area_of_island([[0,0,1,0,0,0,0,1,0,0,0,0,0],
                          [0,0,0,0,0,0,0,1,1,1,0,0,0],
                          [0,1,1,0,1,0,0,0,0,0,0,0,0],
                          [0,1,0,0,1,1,0,0,1,0,1,0,0],
                          [0,1,0,0,1,1,0,0,1,1,1,0,0],
                          [0,0,0,0,0,0,0,0,0,0,1,0,0],
                          [0,0,0,0,0,0,0,1,1,1,0,0,0],
                          [0,0,0,0,0,0,0,1,1,0,0,0,0]]))