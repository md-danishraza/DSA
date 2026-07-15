// Left rotate array by 1 or k positions
function rotateArray(nums: number[], k: number): number[] {
  const n = nums.length;
  const steps = k % n; // Handle cases where k > n

  if (steps === 0) return nums;

  // Slice and concatenate
  // last k element + start to k
  // splice(-k) gives last k elements
  const rotated = nums.slice(-steps).concat(nums.slice(0, n - steps));
  return rotated;
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rotateArray(num, 3));

// in place
function rotateInPlace(nums: number[], k: number): void {
  const n = nums.length;
  const steps = k % n;

  const reverse = (start: number, end: number) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  reverse(0, n - 1); // Reverse entire array
  reverse(0, steps - 1); // Reverse first k elements
  reverse(steps, n - 1); // Reverse remaining elements

  console.log(nums);
}

rotateInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
