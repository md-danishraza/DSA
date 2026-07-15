export {};

function Bsearch(arr: number[], target: number): number {
  let idx = -1;

  let s = 0;
  let e = arr.length - 1;

  //   sort arr
  arr = arr.sort((a, b) => a - b);

  while (s <= e) {
    let mid = Math.floor((e + s) / 2);

    if (arr[mid] === target) {
      idx = mid;
      break;
    }
    if (arr[mid] > target) {
      e = mid - 1;
    }
    if (arr[mid] < target) {
      s = mid + 1;
    }
  }

  return idx;
}

const nums = [9, 8, 7, 6, 5, 4, 3];
console.log(Bsearch(nums, 5));

function BsearchRecursion(
  arr: Array<number>,
  target: number,
  s: number,
  e: number
): number {
  if (s > e) return -1;

  const mid = Math.floor((e + s) / 2);

  if (arr[mid] === target) return mid;

  return arr[mid] > target
    ? BsearchRecursion(arr, target, s, mid - 1)
    : BsearchRecursion(arr, target, mid + 1, e);
}

console.log(BsearchRecursion([22, 333, 555, 1000], 1000, 0, 4));
