export {}

// L - 84
function largestRectangleArea(heights: number[]): number {
    // stores last index(to which it can be extended), height
    let stack:[number,number][] = []
    let maxArea:number = 0


    // iterate one time
    for(let i=0;i<heights.length;i++){
        // if last value is smaller 
        // we can't extend it 
        // pop it update max area 
        let startInd = i
        while(stack.length && stack[stack.length-1][1]>heights[i]){
            let top = stack.pop()!
            startInd = top[0]
            // area = i - startInd (width) * height
            maxArea = Math.max(maxArea,(i-startInd) * top[1])
        }

        // push the current height
        stack.push([startInd,heights[i]])
    }

    // now deal with remaining height in stack
    // these were reached till end (all inreasing order)
    while(stack.length){
        let top = stack.pop()!
        let startInd = top[0]
        // area = end of list (n) - startInd (width) * height
        maxArea = Math.max(maxArea,(heights.length-startInd) * top[1])
    }

    return maxArea
};

console.log(largestRectangleArea([2,1,5,6,2,3]))
console.log(largestRectangleArea([2,4]))