export {}


function openLock(deadends: string[], target: string): number {
    const visited = new Set(deadends);
    
    if (visited.has("0000")) return -1;
    
    // [current_lock, turns_taken]
    const q: [string, number][] = [["0000", 0]];

    // Pointer to simulate O(1) queue shift
    let head = 0; 
    
    // Mark start as visited 
    visited.add("0000");

    while (head < q.length) {
        const [lock, turns] = q[head++];
        
        if (lock === target) {
            return turns;
        }
        
        // process all 8 children (next moves)
        for (let i = 0; i < 4; i++) {
            const digit = parseInt(lock[i]);
            
            // Wrap around logic (9+1 = 0, 0-1 = 9)
            const inc = digit === 9 ? '0' : (digit + 1).toString();
            const dec = digit === 0 ? '9' : (digit - 1).toString();
            
            const child1 = lock.substring(0, i) + inc + lock.substring(i + 1);
            const child2 = lock.substring(0, i) + dec + lock.substring(i + 1);
            
            if (!visited.has(child1)) {
                visited.add(child1);
                q.push([child1, turns + 1]);
            }
            if (!visited.has(child2)) {
                visited.add(child2);
                q.push([child2, turns + 1]);
            }
        }
    }
    
     // unreachable
    return -1;

}