export {}

//  L - 1129
// TC - 2V + E
// SC - V + E
function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
    // adjacency lists
    const red: number[][] = Array.from({ length: n }, () => []);
    const blue: number[][] = Array.from({ length: n }, () => []);
    
    for (const [src, dst] of redEdges) red[src].push(dst);
    for (const [src, dst] of blueEdges) blue[src].push(dst);
    
    const ans = new Array(n).fill(-1);
    
    // [node, length, prevColor (0=Red, 1=Blue, -1=None)]
    const q: [number, number, number][] = [[0, 0, -1]];
    let head = 0; // O(1) queue shift
    
    // visited[node][0] = arrived via Red?
    // visited[node][1] = arrived via Blue?
    const visited = Array.from({ length: n }, () => [false, false]);
    
    while (head < q.length) {
        const [node, length, prevColor] = q[head++];
        
        // Record the shortest path if it's the first time visiting
        if (ans[node] === -1) {
            ans[node] = length;
        }
        
        // If previous wasn't RED, we can take RED edges
        if (prevColor !== 0) {
            for (const neigh of red[node]) {
                if (!visited[neigh][0]) {
                    visited[neigh][0] = true;
                    q.push([neigh, length + 1, 0]); // 0 = Red
                }
            }
        }
        
        // If previous wasn't BLUE, we can take BLUE edges
        if (prevColor !== 1) {
            for (const neigh of blue[node]) {
                if (!visited[neigh][1]) {
                    visited[neigh][1] = true;
                    q.push([neigh, length + 1, 1]); // 1 = Blue
                }
            }
        }
    }
    
    return ans;
}