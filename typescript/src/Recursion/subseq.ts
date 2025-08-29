export {};
console.log("print subsequences of an array");

function subseq(arr: number[]) {
  if (!arr.length) throw new Error("Array is empty!!");

  const n = arr.length;
  subseqRec(0, [], n, arr);
}

function subseqRec(i: number, current: number[], n: number, arr: number[]) {
  if (i >= n) {
    console.log(current);
    return;
  }
  current.push(arr[i]);
  // call left tree
  subseqRec(i + 1, current, n, arr);
  // remove current index for other right tree
  current.pop();
  subseqRec(i + 1, current, n, arr);
}

// const nums = [1, 2, 3];
// subseq(nums);

// printing the subsequences whose sum = k
function subseqSumK(
  arr: number[],
  k: number,
  currentArr: number[] = [],
  i: number = 0
) {
  // base case
  const n = arr.length;
  if (i === n) {
    const sum = currentArr.reduce((prev, curr) => prev + curr, 0);
    if (sum === k) {
      console.log(currentArr);
    }
    return;
  }

  currentArr.push(arr[i]);
  // call left tree
  subseqSumK(arr, k, currentArr, i + 1);
  // remove current index for other right tree
  currentArr.pop();
  subseqSumK(arr, k, currentArr, i + 1);
}

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// subseqSumK(nums, 10);

// printing the subsequences whose sum is sum
// just print one case
function subseqSumKisSum(
  arr: number[],
  k: number,
  currentArr: number[] = [],
  i: number = 0
): boolean {
  // base case
  const n = arr.length;
  if (i === n) {
    const sum = currentArr.reduce((prev, curr) => prev + curr, 0);
    if (sum === k) {
      console.log(currentArr);
      return true;
    }
    return false;
  }

  currentArr.push(arr[i]);
  // call left tree
  const flag = subseqSumKisSum(arr, k, currentArr, i + 1);
  // remove current index for other right tree
  currentArr.pop();
  if (flag) {
    return true;
  } else {
    return subseqSumKisSum(arr, k, currentArr, i + 1);
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
subseqSumKisSum(nums, 10);
