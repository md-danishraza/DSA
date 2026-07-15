export {};
function combSum2(arr: number[], target: number) {
  if (!arr.length) {
    throw new Error("array is empty!!");
  }

  const ansArr: number[][] = [];
  //   handling duplicate
  arr = arr.sort((a, b) => a - b);
  combSumReq2(0, target, ansArr, arr);

  console.log(ansArr);
}

function combSumReq2(
  i: number,
  target: number,
  ansArr: number[][],
  arr: number[],
  subSeq: number[] = []
) {
  // base case
  if (target === 0) {
    console.log(subSeq);
    // answer found
    ansArr.push([...subSeq]);
    return;
  }
  const n = arr.length;
  for (let index = i; index < n; index++) {
    // sinclude first occurence and skip duplicate candidate
    if (i < index && arr[index] == arr[index - 1]) continue;
    // sum exeeded
    if (arr[index] > target) break;

    subSeq.push(arr[index]);
    combSumReq2(index + 1, target - arr[index], ansArr, arr, subSeq);
    subSeq.pop();
  }
}

const nums: number[] = [1, 1, 1, 2, 2, 2, 5, 5, 5, 8, 8, 9, 10, 10];
combSum2(nums, 10);
