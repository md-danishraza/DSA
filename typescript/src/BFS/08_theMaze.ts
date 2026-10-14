export {}

// the maze
// l - 490
function maze_one(maze:number[][],start:number[],dest:number[]):boolean {
    let can_stop = false

    let m = maze.length
    let n = maze[0].length


     // 0: Up, 1: Right, 2: Down, 3: Left
    let dirs = [
        [-1, 0], 
        [0, 1],  
        [1, 0],  
        [0, -1]  
    ];
    let visited:boolean[][] = Array.from({length:m},()=>Array(n).fill(false))
    let q:number[][] = [start]
    let head:number = 0
    visited[start[0]][start[1]] = true
    while(head < q.length){
        // get pos
        const [r, c] = q[head++];

        // its the dest stop
        if (r === dest[0] && c === dest[1]) {
            return true;
        }

        // try rolling in all for dir
        for (const [dr, dc] of dirs) {
            let nr = r;
            let nc = c;

            // keep rolling till hit a wall
            while (
                nr + dr >= 0 && nr + dr < m && 
                nc + dc >= 0 && nc + dc < n && 
                maze[nr + dr][nc + dc] === 0
            ) {
                nr += dr;
                nc += dc;
            }

            // now we are at a deadend stop
            // add it to queue and mark visited
            if (!visited[nr][nc]) {
                visited[nr][nc] = true;
                q.push([nr, nc]);
            }
        }

    }
    
    return false;
}







console.log(maze_one([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]],[0,4],[3,2]))
console.log(maze_one( [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]],[0,4],[4,4]))