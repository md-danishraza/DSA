export {};
function kThPermuationSeq(n: number, k: number) {
  let fact: number = 1;
  let nums: number[] = [];
  for (let i = 1; i < n; i++) {
    nums.push(i);
    fact = fact * i;
  }
  nums.push(n);

  let permutation: string = "";
  // shift by 1 to match 0 indexing
  k = k - 1;
  while (true) {
    const index = Math.floor(k / fact);
    // add number
    permutation = permutation.concat(nums[index].toString());
    // remove that index element
    nums = nums.filter((nums, i) => i != index);
    // base case
    if (!nums.length) break;
    // refactor k and fact for (n-1)
    // next index to look for
    k = k % fact;
    // fact for n-1
    fact = fact / nums.length;
  }
  console.log(permutation);
}

kThPermuationSeq(4, 17);
