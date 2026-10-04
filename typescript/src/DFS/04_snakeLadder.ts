export {}


function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    board.reverse();

    function intToPos(square: number): [number, number] {
        const r = Math.floor((square - 1) / n);
        let c = (square - 1) % n;
        if (r % 2 !== 0) {
            c = n - 1 - c;
        }
        return [r, c];
    }

    const q: [number, number][] = [[1, 0]]; // [square, moves]
    let head = 0; // O(1) queue shift
    
    // Boolean array is faster than Set for 1..N^2
    const visited = new Array(n * n + 1).fill(false);
    visited[1] = true;

    while (head < q.length) {
        const [square, moves] = q[head++];

        for (let i = 1; i <= 6; i++) {
            let nextSquare = square + i;
            
            if (nextSquare > n * n) break;

            const [r, c] = intToPos(nextSquare);
            
            if (board[r][c] !== -1) {
                nextSquare = board[r][c];
            }

            if (nextSquare === n * n) {
                return moves + 1;
            }

            if (!visited[nextSquare]) {
                visited[nextSquare] = true;
                q.push([nextSquare, moves + 1]);
            }
        }
    }

    return -1;
}