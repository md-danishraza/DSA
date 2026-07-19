export {}

//  L - 209 - Minimum Size subarray sum
// Given an array of positive integers nums and a positive integer target, return the
//  minimal length of a subarray whose sum is greater than or equal to target. 
//  If there is no such subarray, return 0 instead.


// TC - On , Sc - O1
function minSubArrayLen(target: number, nums: number[]): number {
    
    // will use two pointer
    let left = 0
    let right = 0

    let minSubArrLen:number = Infinity
    let currSum = 0

    while(right<nums.length){
        let value = nums[right]

        // add value to window
        currSum += value

        // window sum > = target
        // shrink
        while(currSum>=target){
            // update with min Sub array length
            minSubArrLen = Math.min(minSubArrLen,right-left+1)
            // increase left or remove value from window
            currSum -= nums[left]
            left++
        }

        // increase window right
        right++
    }

    return minSubArrLen
};

console.log(minSubArrayLen(7,[2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1,4,4]))