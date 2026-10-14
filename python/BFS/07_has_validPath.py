from collections import deque
from typing import List

# leetcode 1391
def hasValidPath(grid: list[list[int]]) -> bool:
    m,n = len(grid),len(grid[0])
    
    # Define directions
    U, D, L, R = (-1, 0), (1, 0), (0, -1), (0, 1)
    
    # Map street types to allowed (dr, dc) movements
    exits = {
        1: [L, R],
        2: [U, D],
        3: [L, D],
        4: [R, D],
        5: [L, U],
        6: [R, U]
    }
    
    q = deque([(0,0)])
    visited = {(0, 0)}
    
    while q:
        r, c = q.popleft()
        
        if r == m - 1 and c == n - 1:
            return True
            
        current_type = grid[r][c]
        
        # nr,nc of valid neigh
        for dr, dc in exits[current_type]:
            nr, nc = r + dr, c + dc
            
            # check if that neigh is also open path towards us
            if 0 <= nr < m and 0 <= nc < n and (nr, nc) not in visited:
                next_type = grid[nr][nc]
                
                # 2. Is there a mutual connection?
                # The opposite of moving (dr, dc) is moving (-dr, -dc)
                if (-dr, -dc) in exits[next_type]:
                    visited.add((nr, nc))
                    q.append((nr, nc))
            
    
    return False
        
    
    
    
    
print(hasValidPath([[2,4,3],[6,5,2]]))
print(hasValidPath([[1,1,2]]))
       



        