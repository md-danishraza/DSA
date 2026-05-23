export {};

function subsetSumK(nums: number[], target: number) {
  let n = nums.length;

  function recursive(i: number, target: number): number {
    if (target == 0) return 1;
    if (i >= n || target < 0) {
      return 0;
    }

    let left = recursive(i + 1, target - nums[i]);
    let right = recursive(i + 1, target);

    return left + right;
  }

  return recursive(0, target);
}

// TC N*target , SC= On*target
function subsetSumK_DP(nums: number[], targetSum: number) {
  let n = nums.length;

  // dp nums+1 , targetsum+1
  let dp: number[][] = Array(nums.length + 1)
    .fill(null)
    .map(() => Array(targetSum + 1).fill(0));

  // base case: sum 0 is always possible, so 1 subset
  for (let i = 0; i <= nums.length; i++) dp[i][0] = 1;

  for (let i = 1; i <= nums.length; i++) {
    for (let s = 1; s <= targetSum; s++) {
      // either skip nums[i-1] or take it if possible(then check remaining sum)
      dp[i][s] =
        dp[i - 1][s] + (s >= nums[i - 1] ? dp[i - 1][s - nums[i - 1]] : 0);
    }
  }

  return dp[nums.length][targetSum];
}

console.log(subsetSumK([1, 2, 3, 3], 3));
console.log(subsetSumK_DP([1, 2, 3, 3], 3));
