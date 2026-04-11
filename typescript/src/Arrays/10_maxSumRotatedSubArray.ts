export {};
function maxSubarraySumCircular(nums: number[]): number {
  // find globalMin and GlobalMax
  const n = nums.length;

  // max
  let maxSum = nums[0];
  let currSum = nums[0];

  // min
  let minSum = nums[0];
  let currMin = nums[0];

  // total sum
  let totalSum = nums[0];

  for (let i = 1; i < n; i++) {
    // add current element
    // drop if its bigger or smaller using max , min
    currSum = Math.max(nums[i], nums[i] + currSum);
    currMin = Math.min(nums[i], nums[i] + currMin);

    // update max
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    // update min
    if (currMin < minSum) {
      minSum = currMin;
    }

    // add to total
    totalSum += nums[i];
  }

  // if globalMax<0
  // entire array is negative
  if (maxSum < 0) {
    return maxSum;
  } else {
    return Math.max(totalSum - minSum, maxSum);
  }
}

const nums = [9, -4, -7, 9];

console.log(maxSubarraySumCircular(nums));
