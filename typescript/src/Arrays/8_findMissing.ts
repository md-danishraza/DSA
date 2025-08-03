// Find the missing number in 1 to n

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// time complexity = O(n2)
// space            = O(n)
function missingNumber(nums: number[]): number {
  // sort then find
  const sortedArray = nums.sort((a, b) => a - b);
  console.log(sortedArray);
  //   now i can iterate and use the index + 1
  for (let num of sortedArray) {
    if (sortedArray.indexOf(num) != num) {
      return num - 1;
    }
  }

  return 1;
}

// 7 is missing
const mynum = [9, 8, 6, 5, 4, 3, 2, 1, 0];
console.log(missingNumber(mynum));

// time complexity = O(n)
// space            = O(1)
function missingNumber2(nums: number[]): number {
  const n = nums.length;
  // sum of first n Natural number
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

// more elegant
// XOR - odd bit detector
// XNOR - even bit detector
function missingNumber3(nums: number[]): number {
  let xor = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    xor ^= i ^ nums[i];
  }

  xor ^= n; // Include the last number in range [0...n]
  return xor;
}
