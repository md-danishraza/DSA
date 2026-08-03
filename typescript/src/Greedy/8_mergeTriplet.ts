export {}
// 1899. Merge Triplets to Form Target Triplet
function mergeTriplets(triplets: number[][], target: number[]): boolean {
    // set for unique values

    // different target positions successfully covered
    // {0,1,2}
    let mySet = new Set<number>()

    for(let t of triplets){
        // first check all values is < target [i]
        // if any value is greater than any value of target 
        // then this triplet is of no use
        if(t[0] > target[0] || t[1]>target[1] || t[2]>target[2]) continue


        // now add equal values position to set (usable)
        for(let i=0;i<3;i++){
            if(target[i] === t[i]){
                // fill this position
                mySet.add(i)
            }
        }
    }


    return mySet.size === 3
};