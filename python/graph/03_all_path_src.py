from typing import List

def allPathsSourceTarget(graph: List[List[int]]) -> List[List[int]]:
    ans = []
    target = len(graph) - 1

    def dfs(node: int, path: List[int]):
        if node == target:
            ans.append(list(path)) # Append a copy of the path
            return

        for neighbor in graph[node]:
            path.append(neighbor)
            dfs(neighbor, path)
            path.pop() # Backtrack

    dfs(0, [0])
    return ans