from typing import List


def pacificAtlantic(heights: List[List[int]]) -> List[List[int]]:
    if not heights:
        return []

    ROWS,COLS = len(heights),len(heights[0])
    pac,atl = set() , set()

    def dfs(r: int, c: int, visited: set, prev_height: int):
        if (r < 0 or r >= ROWS or c < 0 or c >= COLS or 
            (r, c) in visited or heights[r][c] < prev_height):
            return
            
        visited.add((r, c))
        
        dfs(r + 1, c, visited, heights[r][c])
        dfs(r - 1, c, visited, heights[r][c])
        dfs(r, c + 1, visited, heights[r][c])
        dfs(r, c - 1, visited, heights[r][c])

    for r in range(ROWS):
        dfs(r,0,pac,heights[r][0])
        dfs(r,COLS-1,atl,heights[r][COLS-1])

    for c in range(COLS):
        dfs(0, c, pac, heights[0][c])               # Top edge
        dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]) # Bottom edge


    return [[r,c] for (r,c) in pac & atl]

print(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))