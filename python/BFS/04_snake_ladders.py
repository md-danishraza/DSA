from collections import deque

# L - 909
def snakesAndLadders( board: list[list[int]]) -> int:
        n = len(board)
        
        # zeroth row will be at bottom 
        board.reverse()
        def intToPos(square):
            r = (square-1)//n
            c = (square-1)%n
            # for odd rows 
            if r%2!=0:
                c = n-1-c

            return [r,c]
        
        q = deque()
        # [digit,steps]
        q.append([1,0])
        visited = set()

        while q:
            square,moves = q.popleft()
            
            # run all possible 6 moves 
            for i in range(1,7):
                nextSquare = square + i
                # get pos to find snake or ladder in board
                r,c = intToPos(nextSquare)
                if (board[r][c] != -1):
                    nextSquare = board[r][c]
                    
                # if its ans 
                if nextSquare == n * n:
                    return moves + 1
                
                # add in queue if not visited
                if nextSquare not in visited:
                    visited.add(nextSquare)
                    q.append([nextSquare,moves+1])
        
        return -1 
    
    
print(snakesAndLadders([[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]))