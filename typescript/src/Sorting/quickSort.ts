export {};
function quicksort(arr: number[], start: number, end: number) {
  // base case
  if (start >= end) return;

  //   will sort array and give pivot
  // (nums<pivot on LHS of pivot)
  // (nums>pivot on RHS of pivot)
  const pivot: number = partition(arr, start, end);

  // call left half and right half
  quicksort(arr, start, pivot - 1);
  quicksort(arr, pivot, end);
}

function partition(arr: number[], start: number, end: number) {
  // get pivot element (last)
  const pivot = arr[end];
  // i one less than start
  // for left half
  let i = start - 1;

  for (let j = start; j < end; j++) {
    // number < pivot should be on its right side
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  //   till now pivot is last element
  // final position of pivot (one after i)
  i++;
  [arr[i], arr[end]] = [arr[end], arr[i]];

  return i;
}

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
quicksort(nums, 0, nums.length - 1);
console.log(nums);
