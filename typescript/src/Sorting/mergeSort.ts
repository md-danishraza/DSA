export {};

function mergeSortDivide(arr: number[]) {
  const n = arr.length;

  // base case
  if (n <= 1) return;

  const mid = Math.floor(n / 2);
  const leftArray: number[] = arr.slice(0, mid);
  const rightArray: number[] = arr.slice(mid, n);

  //   divide left and right array
  mergeSortDivide(leftArray);
  //   backtrack
  mergeSortDivide(rightArray);
  //   backtrack
  //   sort them
  //   backtrack
  mergeConquer(leftArray, rightArray, arr);
}

function mergeConquer(
  leftArray: number[],
  rightArray: number[],
  arr: number[]
) {
  let i = 0,
    l = 0,
    r = 0;
  // merging while both sides have elements
  while (l < leftArray.length && r < rightArray.length) {
    if (leftArray[l] <= rightArray[r]) {
      arr[i] = leftArray[l];
      i++;
      l++;
    } else {
      arr[i] = rightArray[r];
      i++;
      r++;
    }
  }
  // add remaining elements
  while (l < leftArray.length) {
    arr[i] = leftArray[l];
    i++;
    l++;
  }
  while (r < rightArray.length) {
    arr[i] = rightArray[r];
    i++;
    r++;
  }

  console.log(arr);
}

const arr = [9, 8, 6, 5, 43, 2, 1];
mergeSortDivide(arr);
console.log(arr);
