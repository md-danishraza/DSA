from typing import List


def updateBoard(board: List[List[str]], click: List[int]) -> List[List[str]]:
    r,c = click

    if board[r][c] == 'M':
        board[r][c] = 'X'
        return board

    ROWS,COLS = len(board),len(board[0])

    dirs = [(1,0), (-1,0), (0,1), (0,-1), (1,1), (1,-1), (-1,1), (-1,-1)]

    def dfs(r: int, c: int):
        if r < 0 or r >= ROWS or c < 0 or c >= COLS or board[r][c] != 'E':
            return
            
        # Count mines in 8 directions using a generator expression
        mines = sum(
            1 for dr, dc in dirs 
            if 0 <= r + dr < ROWS and 0 <= c + dc < COLS and board[r + dr][c + dc] == 'M'
        )
        
        if mines > 0:
            board[r][c] = str(mines)
        else:
            board[r][c] = 'B'
            for dr, dc in dirs:
                dfs(r + dr, c + dc)

    dfs(r,c)
    return board