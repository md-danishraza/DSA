export {};

// use entire array = subset1 + subset2
// these should be independent subsets
function canPartition(nums: number[]): boolean {
  // find total sum
  let totalSum = 0;

  for (let num of nums) totalSum += num;

  // if its even then division is possible (2 subsets equal sum)
  // else return false
  if (totalSum % 2 !== 0) return false;

  const targetSum = totalSum / 2;

  // memo key {i,currSum}
  let memo = new Map<string, boolean>();

  // just find first subset sum = half of total sum
  // other one will mathematically exist
  function recursiveFn(i: number = 0, currSum: number = 0): boolean {
    // if we found the target
    if (currSum === targetSum) return true;

    // if exhausted and no numbers left
    if (currSum > targetSum || i === nums.length) return false;

    // if already computed
    if (memo.has(`${i},${currSum}`)) return memo.get(`${i},${currSum}`)!;

    // now call left and right (recursive)
    const left = recursiveFn(i + 1, currSum + nums[i]);
    const right = recursiveFn(i + 1, currSum);

    // now return any true result
    let result = left || right;
    // add result to memo
    memo.set(`${i},${currSum}`, result);
    return result;
  }

  return recursiveFn();
}

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
