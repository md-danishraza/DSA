// Move all zeros to the end

function moveAllZeroesToEnd(nums: number[]) {
  let insertPos = 0;

  // Move non-zero elements forward
  for (let num of nums) {
    if (num !== 0) {
      nums[insertPos++] = num;
    }
  }

  // Fill the rest with zeros
  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }

  console.log(nums);
}
const myNums = [2, 0, 34, 0, 343, 30, 0, 0];
moveAllZeroesToEnd(myNums);
