export {}

// l - 1391
// 
function hasValidPath(grid: number[][]): boolean {
    // get dim
    let m = grid.length
    let n = grid[0].length

    // street dir
    // 0: Up, 1: Right, 2: Down, 3: Left
    let dirs = [
        [-1, 0], 
        [0, 1],  
        [1, 0],  
        [0, -1]  
    ];

    // street type (using index as type)
    const exits = [
        [],       // 0
        [1, 3],   // 1: Right, Left
        [0, 2],   // 2: Up, Down
        [2, 3],   // 3: Down, Left
        [1, 2],   // 4: Right, Down
        [0, 3],   // 5: Up, Left
        [0, 1]    // 6: Up, Right
    ];

    // start with first street
    const q: [number, number][] = [[0, 0]];
    let head = 0;
    const visited = Array.from({length:m},()=>Array(n).fill(false))
    visited[0][0] = true


    // FIFO
    while (head<q.length){
        // deque and increase pointer
        // essentially ignore visited instead of shifting
        const [r,c] = q[head++]

        // reached dest
        if (r === m - 1 && c === n - 1) return true;

        // get street type
        let type = grid[r][c]

        // get valid  dir according to type
        for (let dir of exits[type]){
            const [dr, dc] = dirs[dir];
            // get new pos
            const nr = r + dr;
            const nc = c + dc;

            // check its validity
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
                const nextType = grid[nr][nc];
                const nextExits = exits[nextType];

                // The next cell MUST have an exit facing back at us.
                // The opposite of dir is always (dir + 2) % 4
                const oppositeDir = (dir + 2) % 4;
                
                if (nextExits.includes(oppositeDir)) {
                    visited[nr][nc] = true;
                    q.push([nr, nc]);
                }
            }
        }

    }

    return false
}