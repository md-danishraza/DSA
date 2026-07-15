export {};
// counting inversions

function bruteForce(arr: number[]) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) count++;
    }
  }
  console.log(count);
}

// const nums = [5, 3, 2, 4, 1];
// bruteForce(nums);

function countInversions(arr: number[]): number {
  return mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr: number[], start: number, end: number): number {
  if (start >= end) return 0;

  const mid = Math.floor((start + end) / 2);
  let count = 0;

  count += mergeSort(arr, start, mid);
  count += mergeSort(arr, mid + 1, end);
  count += merge(arr, start, mid, end);

  return count;
}

function merge(arr: number[], start: number, mid: number, end: number): number {
  const left = arr.slice(start, mid + 1);
  const right = arr.slice(mid + 1, end + 1);

  let i = 0,
    j = 0,
    k = start,
    inversions = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      inversions += left.length - i; // All remaining left[i...] are greater
    }
  }

  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];

  return inversions;
}

// Example usage
const nums = [2, 4, 1, 3, 5];
const totalInversions = countInversions(nums);
console.log("Total Inversions:", totalInversions);
