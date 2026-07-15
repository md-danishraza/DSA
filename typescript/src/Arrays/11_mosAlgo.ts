export {};

// mos algo for query range

function mos(nums: number[], l: number, r: number) {
  let n = nums.length;
  // take root
  let root = Math.floor(Math.sqrt(n));

  // taking ceil to get nearest up integer
  // covering last variable block
  let blockCount = Math.ceil(n / root);
  let blockArr = new Array(blockCount).fill(0);

  for (let i = 0; i < n; i++) {
    blockArr[Math.floor(i / root)] += nums[i];
  }

  console.log(blockArr);

  let sum = 0;
  // do left block
  while (l <= r && l % root !== 0) {
    sum += nums[l];
    l++;
  }

  // do middle blocks
  // take whole blocks
  while (l + root - 1 <= r) {
    sum += blockArr[Math.floor(l / root)];
    // skip to next block
    l += root;
  }

  // add right block
  while (l <= r) {
    sum += nums[l];
    l++;
  }

  console.log(sum);
}

mos([1, 3, 5, 2, 7, 6, 3, 1, 4, 8], 2, 7);
