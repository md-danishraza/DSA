export {}

// 1254. Number of Closed Islands

// floodfill technique
function closedIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    function dfs(r: number, c: number): number {
        // If it's an open island (touches the edge or out of bounds)
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return 0;
        }
        
        // If this is water (1) OR already visited land that we turned into water
        if (grid[r][c] === 1) {
            return 1;
        }

        // Mark as visited by sinking it (0 -> 1)
        grid[r][c] = 1;

        // Run DFS on all four neighbors. 
        // We evaluate all four to ensure the entire island is sunk/visited.
        const up = dfs(r - 1, c);
        const down = dfs(r + 1, c);
        const left = dfs(r, c - 1);
        const right = dfs(r, c + 1);

        // If closed, all four will return 1.
        // If any touched an edge, Math.min returns 0.
        return Math.min(up, down, left, right);
    }

    let count = 0;
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            // If we find an unvisited island (0)
            if (grid[r][c] === 0) {
                // Returns 1 if closed, 0 if open
                count += dfs(r, c);
            }
        }
    }

    return count;
}

// Test case
console.log(closedIsland([
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0]
]));