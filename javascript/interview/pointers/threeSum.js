// Find all unique triplets [a, b, c] in an array that add up to zero.

// TC - O(n2)
// SC - On
function threeSum(arr, k) {
  // sort arr
  arr = arr.sort((a, b) => a - b);
  // set for unique triplets
  const triplets = new Set();

  // for each i perform 2sum
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      // calculate sum
      const sum = arr[i] + arr[left] + arr[right];

      // if sum ===k
      if (sum === k) {
        // add triplet to set in string for uniqueness
        triplets.add(`${arr[i]},${arr[left]},${arr[right]}`);
        left++;
        right--;
      } else if (sum < k) {
        // increase sum
        left++;
      } else {
        // decrease sum
        right--;
      }
    }
  }
  //   converting to string
  return Array.from(triplets).map((str) => str.split(",").map(Number));
}

console.log(threeSum([0, -1, 2, -3, 1], 0));
