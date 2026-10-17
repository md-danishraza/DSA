export {}

//  505
function shortestDistance(maze: number[][], start: number[], destination: number[]): number {
    const m = maze.length;
    const n = maze[0].length;
    
    // dist tracks the absolute minimum spaces traveled to reach (r, c)
    const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity));
    dist[start[0]][start[1]] = 0;
    
    // Up, Down, Left, Right
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // Queue stores: [row, col, total_distance_so_far]
    const q: [number, number, number][] = [[start[0], start[1], 0]];
    let head = 0; // O(1) queue shift
    
    while (head < q.length) {
        const [r, c, currentDist] = q[head++];
        
        // Skip if we already found a strictly better path to this exact state
        if (currentDist > dist[r][c]) {
            continue;
        }
        
        for (const [dr, dc] of dirs) {
            let nr = r;
            let nc = c;
            let rollDist = 0;
            
            // Roll the ball until a wall or boundary
            while (
                nr + dr >= 0 && nr + dr < m && 
                nc + dc >= 0 && nc + dc < n && 
                maze[nr + dr][nc + dc] === 0
            ) {
                nr += dr;
                nc += dc;
                rollDist++;
            }
            
            const newTotalDist = currentDist + rollDist;
            
            // If we found a strictly shorter path to this stopping point, update and queue
            if (newTotalDist < dist[nr][nc]) {
                dist[nr][nc] = newTotalDist;
                q.push([nr, nc, newTotalDist]);
            }
        }
    }
    
    const ans = dist[destination[0]][destination[1]];
    return ans === Infinity ? -1 : ans;
}