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
printAllPermutation(nums);
