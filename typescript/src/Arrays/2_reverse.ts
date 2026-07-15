function reverse<T>(arr: Array<T>): Array<T> {
  let end = arr.length - 1;
  let start = 0;

  while (start < end) {
    // extra variable approach
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    // other option
    // [arr[start], arr[end]] = [arr[end], arr[start]];

    // update the index
    start++;
    end--;
  }

  return arr;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 89, 10];
console.log(reverse<number>(nums));

console.log("using recursion");
console.log("two pointers");
function reverseRecursive<T>(arr: Array<T>, start: number, end: number) {
  if (start >= end) {
    console.log(arr);
    return;
  }
  // swap
  [arr[start], arr[end]] = [arr[end], arr[start]];

  reverseRecursive(arr, start + 1, end - 1);
}

reverseRecursive<number>(nums, 0, nums.length - 1);

console.log("single pointer");
function reverseRecursiveSingle<T>(arr: Array<T>, start: number = 0) {
  const n = arr.length - 1;
  if (start >= n - start) {
    console.log(arr);
    return;
  }
  // swap
  [arr[start], arr[n - start]] = [arr[n - start], arr[start]];

  reverseRecursiveSingle(arr, start + 1);
}

reverseRecursiveSingle<number>(nums);
