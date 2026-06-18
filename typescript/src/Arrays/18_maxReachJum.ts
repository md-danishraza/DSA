export {};

function canJump(nums: number[]): boolean {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxReach < i) return false;

    // greedily update the new maxReach
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}

console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 3, 1, 1, 4]));
