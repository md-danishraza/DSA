export {}


// L - 2824. Count Pairs Whose Sum is Less than Target

// Given a 0-indexed integer array nums of length n and an integer target, return the 
// number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

// two pointer approach
function countPairs(nums: number[], target: number): number {
     nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    let count = 0;

    while (left < right) {

        if (nums[left] + nums[right] < target) {
            // all remaining window pair sum will also satisfy the above codition
            count += right - left;
            left++;

        } else {

            right--;
        }
    }

    return count;
};