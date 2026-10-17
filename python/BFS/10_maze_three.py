import math
from typing import List
from collections import deque



def shortestDistance( maze: List[List[int]], start: List[int], hole: List[int]) -> str:
    m,n = len(maze),len(maze[0])
       
    # distance - min dist to reach from src
    dist = [[math.inf]*n for _ in range(m)]
    paths = [['z']*n for _ in range(m)]
    dist[start[0]][start[1]] = 0
    paths[start[0]][start[1]] = ''
    
    # Directions ordered alphabetically by their character: 'd', 'l', 'r', 'u'
    # This naturally favors lexicographically smaller paths during traversal
    dirs = [(1, 0, 'd'), (0, -1, 'l'), (0, 1, 'r'), (-1, 0, 'u')]
    
    # Queue stores: (row, col, distance_so_far, path_string)
    q = deque([(start[0], start[1], 0, "")])
    
    while q:
        r, c, cur_dist, cur_path = q.popleft()
        
        # Optimization: skip if we've already recorded a strictly better route to this cell
        if cur_dist > dist[r][c] or (cur_dist == dist[r][c] and cur_path > paths[r][c]):
            continue
            
        for dr, dc, d_str in dirs:
            nr, nc = r, c
            roll_dist = 0
            
            # Roll until hitting a wall, going out of bounds, or falling into the hole
            while 0 <= nr + dr < m and 0 <= nc + dc < n and maze[nr + dr][nc + dc] == 0:
                nr += dr
                nc += dc
                roll_dist += 1
                
                # Stop mid-roll if we drop into the hole!
                if [nr, nc] == hole:
                    break
            
            # Only process if the ball actually moved
            if roll_dist > 0:
                new_dist = cur_dist + roll_dist
                new_path = cur_path + d_str
                
                # Update if strictly shorter OR (same distance but alphabetically smaller)
                if new_dist < dist[nr][nc] or (new_dist == dist[nr][nc] and new_path < paths[nr][nc]):
                    dist[nr][nc] = new_dist
                    paths[nr][nc] = new_path
                    q.append((nr, nc, new_dist, new_path))
                    
    ans = paths[hole[0]][hole[1]]
    return "impossible" if ans == "z" else ans


print(shortestDistance(
    [[0, 0, 0, 0, 0],
     [1, 1, 0, 0, 1],
     [0, 0, 0, 0, 0],
     [0, 1, 0, 0, 1],
     [0, 1, 0, 0, 0]], 
    [4, 3], 
    [0, 1]
)) # Expected Output: "lul"