export {}


//  l - 499
function shortestDistance(maze: number[][], start: number[], hole: number[]): string {

    const m = maze.length;
    const n = maze[0].length;

    const dist =  Array.from(({length:m}),()=>Array(n).fill(Infinity))
    // z act as largest value lexicographically
    const paths = Array.from(({length:m}),()=>Array(n).fill('z'))

    // marking start pos 
    dist[start[0]][start[1]] = 0;
    paths[start[0]][start[1]] = "";

    const dirs: [number, number, string][] = [
        [1, 0, 'd'],  // Down
        [0, -1, 'l'], // Left
        [0, 1, 'r'],  // Right
        [-1, 0, 'u']  // Up
    ];
    
    // Queue stores: [row, col,distance so far, path_str]
    const q: [number, number,number, string][] = [[start[0], start[1],0, ""]];

    let head = 0; // O(1) queue shift

    // since we are using bfs 
    // the very first path will be shortest one to reach the hol
    while(head<q.length){
        const [r, c, curDist, curPath] = q[head++];

        // skip this node if better dist exist in previously visited
        if (curDist >= dist[r][c]  && curPath > paths[r][c]) {
            continue;
        }


         // try rolling in all for dir
        for (const [dr, dc, dStr] of dirs) {
            let nr = r;
            let nc = c;
            let rollDist = 0;

            // keep rolling till we hit a wall
            while (
                nr + dr >= 0 && nr + dr < m && 
                nc + dc >= 0 && nc + dc < n && 
                maze[nr + dr][nc + dc] === 0
            ) {
                // increase steps
                nr += dr;
                nc += dc;
                rollDist++;
                
                // Stop if next cell is a hole
                if (nr === hole[0] && nc === hole[1]) {
                    break;
                }
            }

            // if we rolled even a cell then only process   
            if (rollDist > 0) {
                const newDist = curDist + rollDist;
                const newPath = curPath + dStr;

                // Update if the new path is strictly shorter OR (same distance but alphabetically smaller)
                if (newDist < dist[nr][nc] || (newDist === dist[nr][nc] && newPath < paths[nr][nc])) {
                    dist[nr][nc] = newDist;
                    paths[nr][nc] = newPath;
                    q.push([nr, nc, newDist, newPath]);
                }
            }
        }

    }


    const result = paths[hole[0]][hole[1]];
    return result === "z" ? "impossible" : result;
}


console.log(shortestDistance([[0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 1, 0, 0, 0]],[4,3],[0,1]))