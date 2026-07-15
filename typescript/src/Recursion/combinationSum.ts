export {};

// leetcode 39
function combSum(arr: number[], target: number) {
  if (!arr.length) {
    throw new Error("array is empty!!");
  }

  const ansArr: number[][] = [];

  combSumReq(0, target, ansArr, arr);

  console.log(ansArr);
}

function combSumReq(
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
  if (i == n || target < 0) {
    // exceeded or exhausted
    return;
  }

  // take current candidate
  // i = i , target - candidate
  subSeq.push(arr[i]);
  combSumReq(i, target - arr[i], ansArr, arr, subSeq);

  // not take current candidate
  subSeq.pop();
  // i += 1
  combSumReq(i + 1, target, ansArr, arr, subSeq);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
combSum(nums, 10);
