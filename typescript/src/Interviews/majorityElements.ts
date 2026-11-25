export {}

// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3


function majorityElement(nums: number[]): number {

    let ans:number = nums[0]
    let freq:number = 1


    for (let i=1;i<nums.length;i++){
        // count becomes zero 
        // new number is on majority
        if(!freq){
            ans = nums[i]
            freq = 1
            continue
        }
        // if same element
        if(ans==nums[i]){
            freq += 1
        }else{
            freq -= 1
        }
    }

    return ans
};