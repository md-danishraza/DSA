// Find the second largest/smallest element

function secondLargest(nums: Array<number>): number {
  const sortedArray = nums.sort((a, b) => a - b);

  return sortedArray[sortedArray.length - 2];
}

function smallest(nums: Array<number>): number {
  const sortedArray = nums.sort((a, b) => a - b);

  return sortedArray[0];
}

console.log(secondLargest([43, 23, 424, 44]));
console.log(smallest([43, 23, 424, 44]));
