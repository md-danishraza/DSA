function subarraySum(nums: number[], k: number): number {
  let prefixCounts = new Map<number, number>();

  // starting from 0 sum having 1 count
  prefixCounts.set(0, 1);

  let currentSum = 0;
  let totalSubarr = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    // get prefix sum (previous one)
    let targetPrefix = currentSum - k;

    if (prefixCounts.has(targetPrefix)) {
      // If we have, it means there is a contiguous subarray ending here that equals k!
      totalSubarr += prefixCounts.get(targetPrefix)!;
    }

    // Add the current running sum to our map for future elements to use
    // if exist add by one
    // else add new one
    if (prefixCounts.has(currentSum)) {
      prefixCounts.set(currentSum, prefixCounts.get(currentSum)! + 1);
    } else {
      prefixCounts.set(currentSum, 1);
    }
  }

  return totalSubarr;
}





