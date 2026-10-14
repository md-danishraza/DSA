from typing import List


def hasPath( maze: List[List[int]], start: List[int], destination: List[int]) -> bool:
    
    m,n = len(maze),len(maze[0])
    
    visited = set()
    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    # explore only from stoppable points 
    def dfs(r,c):
        # if this stoppable is the destination 
        if [r, c] == destination:
                return True
    
        # mark this path visited
        visited.add((r, c))
        
        for dr,dc in dirs:
            nr, nc = r, c
                
            # Roll the ball in the current direction until a wall or boundary
            while 0 <= nr + dr < m and 0 <= nc + dc < n and maze[nr + dr][nc + dc] == 0:
                nr += dr
                nc += dc
            
            # If we haven't explored from this stopping point yet, recurse
            if (nr, nc) not in visited:
                if dfs(nr, nc):
                    return True
        
        # not stoppable at dest
        return False
    
    return dfs(start[0],start[1])
    

print(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]],[0,4],[3,2]))
print(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]],[0,4],[4,4]))