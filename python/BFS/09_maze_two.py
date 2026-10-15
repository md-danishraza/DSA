from typing import List
import math
from collections import deque
#  l - 505

def hasPath( maze: List[List[int]], start: List[int], destination: List[int]) -> int:
    m,n = len(maze),len(maze[0])
   
    # distance - min dist to reach from src
    dist = [[math.inf]*n for _ in range(m)]
    # src from src 
    dist[start[0]][start[1]] = 0
    
    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    # r,c,steps
    q = deque([(start[0], start[1], 0)])
    
    while(len(q)):
        
        r, c, current_dist = q.popleft()
        
        # If we pulled a path from the queue that is already worse than a 
        # newly discovered shorter path, just skip it.
        if current_dist > dist[r][c]:
            continue
        
        # visit paths   
        for dr,dc in dirs:
            nr, nc = r, c
            # starting point from current pos
            roll_dist = 0
                
            # Roll the ball in the current direction until a wall or boundary
            while 0 <= nr + dr < m and 0 <= nc + dc < n and maze[nr + dr][nc + dc] == 0:
                nr += dr
                nc += dc
                roll_dist += 1
            
            new_total_dist = current_dist + roll_dist
            # if new dist is shorter than only add it to queue
            if new_total_dist < dist[nr][nc]:
                dist[nr][nc] = new_total_dist
                q.append((nr, nc, new_total_dist))

    
    ans = dist[destination[0]][destination[1]]
    return ans if ans != math.inf else -1
        
    
    
    
print(hasPath([[0,0,1,0,0],
        [0,0,0,0,0],
        [0,0,0,1,0],
        [1,1,0,1,1],
        [0,0,0,0,0]],[0,4],[4,4]))