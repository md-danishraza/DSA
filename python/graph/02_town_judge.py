from typing import List

def find_judge(n: int, trust: List[List[int]]) -> int:
    if n == 1 and not trust:
        return 1
        
    # Array to track net trust
    trust_scores = [0] * (n + 1)
    
    for a, b in trust:
        trust_scores[a] -= 1
        trust_scores[b] += 1
        
    # Find the single person with score == n - 1
    for i in range(1, n + 1):
        if trust_scores[i] == n - 1:
            return i
            
    return -1