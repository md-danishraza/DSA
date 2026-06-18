export {};

function searchInRotated(nums: number[], target: number): number {
  let s = 0;
  let e = nums.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[s] <= nums[mid]) {
      if (target >= nums[s] && target <= nums[mid]) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target >= nums[mid] && target <= nums[e]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
  }

  return -1;
}

console.log(searchInRotated([4, 5, 6, 7, 0, 1, 2], 0));
