export {}

// L - 11
// You are given an integer array height of length n. There are n vertical lines drawn
// such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the 
// container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height: number[]): number {
    
    let left = 0
    let right = height.length-1

    let maximum = -1

    while(left<right){

        // first calculate area of water in current container
        let length = right-left
        let breadth = height[left] < height[right] ? height[left] : height[right]

        let area = length * breadth

        // set maximum
        maximum = Math.max(maximum, area)

        // move pointer 
        // shift smaller height
        if(breadth === height[left]) left++ 
        else right--

    }

    return maximum
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))

