export {}


function shortestBridge(grid: number[][]): number {
    const N = grid.length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    // Set to hold our 1D coordinates
    const visited = new Set<number>();
    let q: number[][] = [];
    
    const invalid = (r: number, c: number): boolean => {
        return r < 0 || c < 0 || r === N || c === N;
    };
    
    // DFS to find the first island
    const dfs = (r: number, c: number) => {
        const key = r * N + c; // Convert 2D to 1D index
        if (invalid(r, c) || grid[r][c] === 0 || visited.has(key)) {
            return;
        }
        
        visited.add(key);
        q.push([r, c]); // Add directly to queue for BFS
        
        for (const [dr, dc] of dirs) {
            dfs(r + dr, c + dc);
        }
    };
    
    // 1. Locate the first island using DFS
    let found = false;
    for (let r = 0; r < N; r++) {
        if (found) break;
        for (let c = 0; c < N; c++) {
            if (grid[r][c] === 1) {
                dfs(r, c);
                found = true;
                break;
            }
        }
    }
    
    // 2. Expand using Multi-Source BFS
    let res = 0;
    while (q.length > 0) {
        const nextQ: number[][] = []; // Next layer queue (avoids O(N) shift operation)
        
        for (const [r, c] of q) {
            for (const [dr, dc] of dirs) {
                const curR = r + dr;
                const curC = c + dc;
                const key = curR * N + curC;
                
                if (invalid(curR, curC) || visited.has(key)) {
                    continue;
                }
                
                // If it's a 1 and not visited, we've hit the second island
                if (grid[curR][curC] === 1) {
                    return res;
                }
                
                visited.add(key);
                nextQ.push([curR, curC]);
            }
        }
        
        // Move to the next level
        q = nextQ;
        res++;
    }
    
    return res;
}