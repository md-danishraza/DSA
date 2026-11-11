export {}

// L - 130
/*
You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: A region is surrounded if none of the 'O' cells in that region are on the edge of the board. Such regions are completely enclosed by 'X' cells.
To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

*/

// TC =  m*n
function captureSurrounded(board: string[][]):void {
    const m = board.length;
    if (m === 0) return;

    const n = board[0].length;

    function dfs(i: number, j: number): void {
        // Out of bounds or not an O
        if (
            i < 0 || j < 0 ||
            i >= m || j >= n ||
            board[i][j] !== "O"
        ) {
            return;
        }

        // if its "O"
        // Mark as safe / visited
        board[i][j] = "T";

        // Explore all four directions
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    // 1. Check first and last columns
    for (let i = 0; i < m; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }

    // 2. Check first and last rows
    for (let j = 0; j < n; j++) {
        dfs(0, j);
        dfs(m - 1, j);
    }

    // till now we have marked safe "T" all cells from outside
    // that are not surroundable
    // 3. Capture surrounded regions and restore safe regions
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            } else if (board[i][j] === "T") {
                board[i][j] = "O";
            }
        }
    }
}