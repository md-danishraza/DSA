function findMinMax(nums: Array<number>): [number, number] {
  let min = nums[0];
  let max = Math.max();

  for (let num of nums) {
    if (num < min) {
      min = num;
    }
    if (max < num) {
      max = num;
    }
  }
  return [min, max];
}

console.log(findMinMax([3, 37, 2, 45, 2, 45]));
