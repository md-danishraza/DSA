function checkSorting(nums: Array<number>): boolean {
  let isSorted: boolean;
  isSorted = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (!(nums[i] <= nums[i + 1])) {
      isSorted = false;
      return isSorted;
    }
  }

  return isSorted;
}

function checkSorting2(nums: number[]): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(checkSorting([1, 2, 4]));
