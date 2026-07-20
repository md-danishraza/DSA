export {}

//  L - 16

// Given an integer array nums of length n and an integer target, find three integers at 
// distinct indices in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

function threeSumClosest(nums: number[], target: number): number {
    // first sort
    nums.sort((a,b)=>a-b)
    // closest 
    let closestSum = Infinity
    // global min Difference
    let minDiff = Infinity

    for (let i = 0; i < nums.length - 2; i++) {

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      let currDiff = Math.abs(target - sum)
    //   if current 3 sum diff is smaller 
    // then update pointers
      if(currDiff<minDiff){
        closestSum = sum
        minDiff = currDiff
      }
      
        if(sum<target){
            left++
        }else{
            right--
        }
       
    }
  }

  return closestSum
};

console.log(threeSumClosest([-1,2,1,-4],1))
console.log(threeSumClosest([0,0,0],1))