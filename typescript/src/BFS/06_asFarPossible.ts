export {}

//  1162
// longest path between land and water
// multisource queue
// TC = SC = On2
function maxDistance(grid: number[][]): number {
    const N = grid.length;
    const q: [number, number][] = [];
    // Simulated O(1) dequeue
    let head = 0; 

    // Find all lands
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (grid[r][c] === 1) {
                q.push([r, c]);
            }
        }
    }

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let res = -1;

    // Expand outward
    while (head < q.length) {
        const [r, c] = q[head++];
        res = grid[r][c];

        for (const [dr, dc] of dirs) {
            const newR = r + dr;
            const newC = c + dc;

            if (newR >= 0 && newR < N && newC >= 0 && newC < N && grid[newR][newC] === 0) {
                grid[newR][newC] = res + 1;
                q.push([newR, newC]);
            }
        }
    }

    return res > 1 ? res - 1 : -1;
}