export {}

// l-1387
function getKth(lo: number, hi: number, k: number): number {
    // integer,power
    let cache = new Map<number,number>()
    // base case in cache
    cache.set(1,0)

  
    //  bottom up approach (each fn will add 1 + expect ans from recursion)
    function findPow(x:number):number{
        // if in cache return 
        // since all number [1,1000] atmost has 178 pow to become 1 (certain base case) 
        if(cache.has(x)) return cache.get(x)!;
        // Calculate power recursively
        let steps = 0;
        if (x % 2 === 0) {
            steps = 1 + findPow(x / 2);
        } else {
            steps = 1 + findPow(3 * x + 1);
        }

        // Cache this intermediate value for future lookups
        cache.set(x, steps);
        return steps;
    }

    // call this fn for range [low,high]
    // x,power
    const powers: [number, number][] = [];
    for (let i = lo; i <= hi; i++) {
        powers.push([i, findPow(i)]);
    }
   // Sort by power. If powers are equal, sort by the number itself.
    powers.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    return powers[k - 1][0];
};


console.log(getKth(7,11,4))
console.log(getKth(12,15,2))


/*
TC - RlogR
dominant operation is sorting of range array 
for memo and rec = The maximum number of steps for any number up to 1000 is 178. 
so amortized O(1) per N

SC- R + U = R (ppwers array), U=recursion stack bounded to few thousands
*/