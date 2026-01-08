// Find pairs of numbers whose difference is exactly k. (e.g.,|a - b| = k).

// O(nlogn)
function findDifferencePairs1(nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = 1;

  //   forward two pointer
  while (right < nums.left) {
    let diff = nums[right] - nums[left];

    // if pair exists
    if (diff === k && left !== right) return true;
    else if (diff < k)
      // need to increase diff
      //  by smaller right
      right--;
    // need  to decrease the diff
    // by bigger left
    else left++;
  }

  return false;
}
// Example
const values = [1, 5, 3, 4, 2];
const k = 2;
console.log(findDifferencePairs1(values, k));

// O(n)
function findDifferencePairs(nums, k) {
  // Using a Set for fast O(1) lookups.
  // Set to remove duplicates and speed up access.
  const numSet = new Set(nums);
  const pairs = [];

  for (const num of numSet) {
    // checking (num + k) to avoid duplicate pairs
    // (no, finding [5, 2] and [2, 5] separately)
    if (numSet.has(num + k)) {
      pairs.push([num, num + k]);
    }
  }

  return pairs;
}

console.log(findDifferencePairs(values, k));
