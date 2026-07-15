export {};

function printAllPermutation(arr: number[]) {
  if (!arr.length) throw new Error("array can't be empty!!");

  const ansArr: number[][] = [];
  const mapArr: boolean[] = new Array(arr.length).fill(false);
  permutaionRec(arr, ansArr, mapArr);

  console.log(ansArr);
}

function permutaionRec(
  arr: number[],
  ansArr: number[][],
  mapArr: boolean[],
  permArr: number[] = []
) {
  const n = arr.length;
  // base case
  if (permArr.length === n) {
    ansArr.push([...permArr]);
    return;
  }

  // calling fn for 0 - n on each level
  for (let i = 0; i < n; i++) {
    // if not taken
    if (!mapArr[i]) {
      permArr.push(arr[i]);
      // mark that index in map
      mapArr[i] = true;
      permutaionRec(arr, ansArr, mapArr, permArr);
      // remove the index and mark for next loop i
      permArr.pop();
      mapArr[i] = false;
    }
  }
}

const nums = [1, 2, 3];
const nums2 = [3, 1, 2];
printAllPermutation(nums);
printAllPermutation2(nums2);

// method 2 without any map array

function printAllPermutation2(arr: number[]) {
  if (!arr.length) throw new Error("array can't be empty!!");

  const ansArr: number[][] = [];
  permutaionRec2(arr, ansArr, 0);

  console.log(ansArr);
}

function permutaionRec2(
  permArr: number[],
  ansArr: number[][] = [],
  i: number = 0
) {
  const n = permArr.length;

  if (i === n) {
    ansArr.push([...permArr]);
    return;
  }

  // loop from i to n
  for (let j = i; j < n; j++) {
    // swap it with i
    [permArr[i], permArr[j]] = [permArr[j], permArr[i]];
    // then call recursion
    permutaionRec2(permArr, ansArr, i + 1);
    // reswap for next loop
    [permArr[i], permArr[j]] = [permArr[j], permArr[i]];
  }
}
