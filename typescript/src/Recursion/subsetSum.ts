export {};
console.log("subsets sum");
// we will store sum of each subset in ans array

function subsetSum(arr: number[]) {
  if (!arr.length) throw new Error("Array is empty!!");
  const ansArr: number[] = [];
  subsetSumReq(arr, 0, 0, ansArr);

  console.log(ansArr.sort((a, b) => a - b));
}

function subsetSumReq(
  arr: number[],
  i: number = 0,
  sum: number = 0,
  ansArr: number[] = []
) {
  const n = arr.length;

  if (i === n) {
    ansArr.push(sum);
    // console.log(ansArr);
    return;
  }

  // take current index
  sum += arr[i];
  subsetSumReq(arr, i + 1, sum, ansArr);
  // not take
  sum -= arr[i];
  subsetSumReq(arr, i + 1, sum, ansArr);
}

const nums = [3, 1, 2, 10, 4, 2];
subsetSum(nums);
