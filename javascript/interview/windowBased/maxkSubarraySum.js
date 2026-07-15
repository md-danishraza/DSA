// Find the maximum sum of any contiguous subarray of size k.

// bruteForce
// O n*k
function maxSubArrBrute(arr, k) {
  let globalSum = 0;
  // check all subarray starting from 0
  for (let i = 0; i < arr.length - k; i++) {
    let tempSum = 0;
    for (let j = i; j < i + k; j++) {
      tempSum += arr[k];
    }
    // update global sum
    globalSum = Math.max(tempSum, globalSum);
  }

  return globalSum;
}
console.log(maxSubArr([2, 1, 5, 1, 3, 2], 3));

// O(n)
function maxSubArr(arr, k) {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  //   create k size window
  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArr([2, 1, 5, 1, 3, 2], 3));
