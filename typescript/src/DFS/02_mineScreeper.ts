export {}

// 529x
function updateBoard(board: string[][], click: number[]): string[][] {
    // get first click coordinate
    let [r,c] = click

    // if first click was Mine
    if (board[r][c] === 'M') {
        board[r][c] = 'X';
        return board;
    }

    const ROWS = board.length
    const COLS = board[0].length

    // base coordinate for all 8 direction of a grid(0,0)
    const dirs = [[1,0], [-1,0], [0,1], [0,-1], [1,1], [1,-1], [-1,1], [-1,-1]];

    function dfs(r:number,c:number){
        // base case
        // out of bound or revealed(not empty)
        if(r < 0 || r >= ROWS || c < 0 || c >= COLS || board[r][c] !== 'E'){
            return ;
        }

        // scan for mines (using dirs just add r and c of current grid)
        let mines = 0;
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === 'M') {
                mines++;
            }
        }

        if (mines > 0) {
            // Found adjacent mines, write number and halt this path
            // No need to do further DFS
            board[r][c] = mines.toString();
        } else {
            // No adjacent mines, mark blank and flow outward
            board[r][c] = 'B';
            // same DFS for all its neighbors
            for (const [dr, dc] of dirs) {
                dfs(r + dr, c + dc);
            }
        }
    }

    dfs(r, c);
    return board;
};

// Time Complexity: M*N — In the worst case (a board with zero mines),
//  the DFS will visit and update every single cell exactly once.
// Space Complexity: M*N — The depth of the recursion call stack could potentially reach
//   the total number of cells on the board if the cascade snakes through the entire 
//   grid.