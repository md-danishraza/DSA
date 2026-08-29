export {}



// L - 1054. Distant Barcodes

// In a warehouse, there is a row of barcodes, where the ith
//  barcode is barcodes[i].

// Rearrange the barcodes so that no two adjacent barcodes are equal.
//  You may return any answer, and it is guaranteed an answer exists.

// TC = SC = On
function rearrangeBarcodes(barcodes: number[]): number[] {
   
    let freq = new Map<number,number>()

    for(let codes of barcodes){
        freq.set(codes,(freq.get(codes)||0)+1)
    }
    let count:[number,number][] = []
    for(let item of freq.entries()){
        count.push(item)
    }
    let k = barcodes.length
    let ans:number[] = new Array(k)

    let index = 0;

    for (const [code, frequency] of count) {
        for (let j = 0; j < frequency; j++) {
            ans[index] = code;

            // fill alternate pos
            index += 2;
            // next start from 1
            if (index >= barcodes.length) {
                index = 1;
            }
        }
    }

    return ans
};

console.log(rearrangeBarcodes([1,1,1,2,2,2]))
console.log(rearrangeBarcodes([1,1,1,1,2,2,3,3]))