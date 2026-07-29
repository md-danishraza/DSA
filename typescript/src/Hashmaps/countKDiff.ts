export {}

// 

// L-2006. Count Number of Pairs With Absolute Difference K

// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

function countKDifference(nums: number[], k: number): number {
    let freq = new Map<number,number>()
    let count = 0

    for(let num of nums){
        // update count with existing absolute pairs in map
        count += freq.get(num-k) ?? 0;
        count += freq.get(num+k) ?? 0;

        // increase the current num with existing count else 0
        freq.set(num, (freq.get(num) ?? 0) + 1);
        
    }
    return count
};

console.log(countKDifference([1,2,2,1],1))