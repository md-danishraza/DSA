export {};
console.log("subsets  2");
// we will store subsets in ans array
// reuse of same value is allowed
// but subsets should be unique

function subset2(arr: number[]) {
  if (!arr.length) throw new Error("Array is empty!!");
  const ansArr: number[][] = [];
  arr.sort((a, b) => a - b);
  subset2Req(arr, 0, [], ansArr);

  console.log(ansArr);
}

function subset2Req(
  arr: number[],
  i: number = 0,
  subseq: number[],
  ansArr: number[][] = []
) {
  // adding all the subsets
  ansArr.push([...subseq]);
  const n = arr.length;

  for (let index = i; index < n; index++) {
    // include first occurence and skip duplicate candidate at same level
    // pruning forward
    if (i < index && arr[index] == arr[index - 1]) continue;

    subseq.push(arr[index]);
    subset2Req(arr, index + 1, subseq, ansArr);
    subseq.pop();
  }
}

const nums = [1, 2, 2];
subset2(nums);
