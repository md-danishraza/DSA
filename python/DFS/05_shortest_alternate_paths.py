from collections import defaultdict
from collections import deque
# L - 1129
def shortestAlternatingPaths(self, n: int, redEdges: list[list[int]], blueEdges: list[list[int]]) -> list[int]:
    # adjacency list
    red = defaultdict(list)
    blue = defaultdict(list)
    
    for src,dst in redEdges:
        red[src].append(dst)
    for src,dst in blueEdges:
        blue[src].append(dst)
    
    
    ans = [-1 for i in range(n)]
    # # base 
    # ans[0] = 0
    
    q = deque()
    # node,distance/steps to reach,prev edge color
    q.append([0,0,None])
    
    visited = set()
    # node,prev edge color
    visited.add((0,None))
    
    while q:
        node,length,prevColor = q.popleft()
        
        # update the path for this node
        if ans[node] == -1:
            ans[node] = length
            
        # visit alternate neighbors
        if prevColor != "RED":
            # visit red
            for neigh in red[node]:
                if (neigh,'RED') not in visited:
                    visited.add((neigh,"RED"))
                    q.append([neigh,length+1,'RED'])
        if prevColor != "BLUE":
            # visit blue
            for neigh in blue[node]:
                if (neigh,'BLUE') not in visited:
                    visited.add((neigh,"BLUE"))
                    q.append([neigh,length+1,'BLUE'])
    
    return ans;