export {}

// 417
// TC = SC = M*N (limited to no.of cells in island)
function pacificAtlantic(heights: number[][]): number[][] {
    if(!heights.length) return [];
    
    const ROWS = heights.length
    const COLS = heights[0].length

    // 2d arr to track reachability
    const pac = Array.from({length:ROWS},() => new Array(COLS).fill(false))
    const atl = Array.from({length:ROWS},() => new Array(COLS).fill(false))

    // reverse DFS (coast to hill)
    function dfs(r:number,c:number,visited:boolean[][],prevHeight:number){
        // if out of bound or strictly downhill (invalid for reverse)
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS || visited[r][c] || heights[r][c] < prevHeight) {
            return;
        }

        // mark current part visited
        visited[r][c] = true

        // explore all 4 adjacent parts
        dfs(r + 1, c, visited, heights[r][c]);
        dfs(r - 1, c, visited, heights[r][c]);
        dfs(r, c + 1, visited, heights[r][c]);
        dfs(r, c - 1, visited, heights[r][c]);
    }

    // run DFS for vertical borders (pacific left and atlantic right)
    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac, heights[r][0]);
        dfs(r, COLS - 1, atl, heights[r][COLS - 1]);
    }
    
    // run DFS for horizontal borders (pacific left and atlantic right)
    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pac, heights[0][c]);
        dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]);
    }

    // Find intersection
    const ans: number[][] = [];
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (pac[r][c] && atl[r][c]) {
                ans.push([r, c]);
            }
        }
    }

    return ans;
};