export {}

// leetcode - 1042
function gardenNoAdj(n: number, paths: number[][]): number[] {
    // first build path 
    // node : [neighbors]
    // bidirectional adjacency list - 1 indexed
    let adj:number[][] =  Array.from({length:n+1},()=>[]);

    for (const [u, v] of paths) {
        adj[u].push(v);
        adj[v].push(u); 
    }

    // result arr 0 indexed
    const ans = new Array(n).fill(0);

    // greedily color each node
    for(let i=1;i<=n;i++){
        // track used colors by neighbor 1-4
        let usedColors = new Array(5).fill(false)

        for(const neighbor of adj[i]){
            const neighborColor = ans[neighbor - 1]; 
            if (neighborColor !== 0) {
                usedColors[neighborColor] = true;
            }
        }

        // pick first available color for current node
        for(let color=1;color<=4;color++){
            if(!usedColors[color]){
                ans[i-1] = color
                break;
            }
        }
    }

    return ans
};