export {}

// 659. Split Array into Consecutive Subsequences


// tc = sc = On
function isPossible(nums: number[]): boolean {

    // availablity map (count)
    const avMap = new Map<number,number>()
    // vacancy map (need) number,need
    const needMap = new Map<number,number>()


    // count values
    for(let num of nums){
        avMap.set(num,(avMap.get(num) ?? 0) + 1)
    }

    for(let num of nums){
        // already used ,skip to next num
        if(avMap.has(num) && avMap.get(num)==0) continue

        // is needed by existing subseq or vacancies exist
        if(needMap.has(num) && needMap.get(num)!>0){
            // use it
            needMap.set(num,needMap.get(num)!-1)
            avMap.set(num, avMap.get(num)! - 1)
            // create vacancy for next consequtive number
            needMap.set(num+1,(needMap.get(num+1) ?? 0) + 1)

            continue
        }

        // start new subseq
        // if next two conseq num is available
        if(avMap.has(num+1) && avMap.has(num+2)
            && avMap.get(num+1)!>0   && avMap.get(num+2)!>0
        ){
            // use them to create group of min 3 (x,x+1,x+2)
            // reduce the count in availability
            avMap.set(num,avMap.get(num)!-1)
            avMap.set(num+1,avMap.get(num+1)!-1)
            avMap.set(num+2,avMap.get(num+2)!-1)

            // also create vacancy/need for x+3 number
           needMap.set(num+3,(needMap.get(num+3)??0) + 1)

            continue
        }

        // if all above constraints fails 
        // then this element cause  invalid seq
        return false
    }

    return true
};


console.log(isPossible([1,2,3,4,4,5]))