
# l - 130
class Solution:
    def solve(self, board: list[list[str]]) -> None:
        m = len(board)
        
        if not m:
            return
        
        n = len(board[0])
        
        def dfs(i,j):
            # if out of bound or "X" or "T" return
            if i < 0 or j < 0 or i >= m or j >= n or board[i][j] != "O":
                return
            
            # mark it as safe T (visited)
            board[i][j] = "T"
            
            # visit neighbors
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)
            
        # start with border edges to mark 
        # to check 'O' and mark safe / visited / unsurrounded
        for i in range(m):
            dfs(i,0) 
            dfs(i,n-1) 
        for i in range(n):
            dfs(0,i) 
            dfs(m-1,i) 
            
    
        for i in range(m):
            for j in range(n):
                if (board[i][j] =="O"):
                    board[i][j] = "X"
                elif (board[i][j] == "T"):
                    board[i][j] = "O"
        
        

sol = Solution()
grid = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
sol.solve(grid)
print(grid)