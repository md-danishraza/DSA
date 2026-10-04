from typing import List
from collections import deque
def openLock( deadends: list[str], target: str) -> int:
    if '0000' in deadends:
        return -1


    q = deque()
    # lock,turns took
    q.append(['0000',0])
    # initiate visited with deadends
    visited = set(deadends)
    
    def childrens(lock):
        res = []
        # two steps(increment and decrement 2^n) for each digit 
        for i in range(4):
            digit = int(lock[i])
            inc = str((digit + 1) % 10)
            # although python handles negative module natively 
            dec = str((digit - 1 + 10) % 10) 
            
            res.append(lock[:i] + inc + lock[i+1:])
            res.append(lock[:i] + dec + lock[i+1:])
        
        return res
    
    while q:
        lock,turns = q.popleft()
        
        if lock == target:
            return turns
        
        # add all next move childrens to queue
        for child in childrens(lock):
            if(child not in visited):
                visited.add(child)
                q.append([child,turns+1])
                
    return -1 
    


print(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"],"8888"))