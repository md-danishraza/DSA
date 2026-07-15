export {};

function maxSubsequence(nums: number[], k: number): number[] {
  function helper(
    i: number,
    k: number,
    currSum: number,
    subSeq: number[]
  ): [number, number[]] {
    // base cases
    // if suseq length reached
    if (subSeq.length === k) {
      // console.log(subSeq, currSum);
      return [currSum, subSeq];
    }
    //  if we reached end without length k
    // dead end
    if (i === nums.length) {
      return [-Infinity, []];
    }

    // take current
    let [leftSum, leftSubSeq] = helper(i + 1, k, currSum + nums[i], [
      ...subSeq,
      nums[i],
    ]);
    // not take current element
    let [rightSum, rightSubSeq] = helper(i + 1, k, currSum, subSeq);

    // return subseq with greater sum
    return leftSum > rightSum ? [leftSum, leftSubSeq] : [rightSum, rightSubSeq];
  }

  return helper(0, k, 0, [])[1];
}

function maxSubsequence2(nums: number[], k: number): number[] {
  let sortedDesc = nums.map((v, i) => ({ v, i })).sort((a, b) => b.v - a.v);

  // top k
  let topK = sortedDesc.slice(0, k);

  // sort in relative order using index
  // and return only value
  return topK.sort((a, b) => a.i - b.i).map((a) => a.v);
}

console.log(maxSubsequence([2, 1, 3, 3], 2));
console.log(maxSubsequence2([-1, -2, 3, 4], 3));
