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

const nums = [1, 2, 3];
subseq(nums);
