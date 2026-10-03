from typing import List

def gardenNoAdj(n: int, paths: List[List[int]]) -> List[int]:
    # 1. Build adjacency list
    adj = [[] for _ in range(n + 1)]
    for u, v in paths:
        adj[u].append(v)
        adj[v].append(u)

    ans = [0] * n

    # 2. Greedily assign flowers
    for i in range(1, n + 1):
        # Gather all colors currently used by neighbors
        used_colors = {ans[neighbor - 1] for neighbor in adj[i]}
        
        # Pick the first color from 1..4 that isn't used
        for color in range(1, 5):
            if color not in used_colors:
                ans[i - 1] = color
                break
                
    return ans