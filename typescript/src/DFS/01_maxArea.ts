export {}

//  L - 695

function maxAreaOfIsland(grid: number[][]): number {
    let m = grid.length
    let n = grid[0].length

    const visited = Array.from({length:m},()=>Array(n).fill(false))

    let maxArea = 0
    // for each cell perform dfs
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] === 1 && !visited[i][j]){
                let currMax = dfs(i,j)
                maxArea = Math.max(currMax,maxArea)
            }

        }
    }

    function dfs(i:number,j:number):number{
        // mark visited
        visited[i][j] = true
        let value = grid[i][j]

        // if water return 0
        if(!value){
            return 0
        }else{
            // if island 
            // Up, Down, Left, Right
            const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            let currentArea = 1;
            for (const [dr, dc] of dirs) {
                let nr = i+ dr;
                let nc = j +dc;
                // visit all valid dir
                if( nr >= 0 && nr < m && 
                nc >= 0 && nc < n && !visited[nr][nc]){
                    currentArea += dfs(nr, nc)
                }
            }
            
            return currentArea;
        }

    }

    return maxArea;
};