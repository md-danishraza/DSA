export {}


// L - 1338 - Reduce array size to half


function minSetSize(arr: number[]): number {
    // minimum remove half or greater (make it empty)
    // size of new arr < n/2
    // count occurrence using map
    let countMap = new Map<number,number>()

    for(let int of arr){
        if(!countMap.has(int)){
            countMap.set(int,1)
        }else{
            countMap.set(int,countMap.get(int)!+1)
        }
    }
    // now create count array sorted
    // [value,count]
    let res:number[][] = []
    for(let [value,count] of countMap.entries()){
        res.push([value,count])
    }
    res.sort((a,b)=>b[1]-a[1])

    //   // Only frequencies matter
    // const frequencies = [...freq.values()];
    // // Largest frequencies first
    // frequencies.sort((a, b) => b - a);

    let threshold = arr.length/2
    let minSet = 0
    let currCount = 0
    for(let [value,count] of res){
        currCount += count
        minSet += 1
        if(currCount>=threshold) break
    }

    return minSet
};

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]))
console.log(minSetSize([7,7,7,7,7,7]))