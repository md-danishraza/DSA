export {};

function mergeSort(arr: number[], s: number, e: number): number[] {
  // base case
  // if single element array
  if (s >= e) {
    return [arr[s]];
  }

  // mid
  let mid = Math.floor((s + e) / 2);

  // divide
  let left = mergeSort(arr, s, mid);
  let right = mergeSort(arr, mid + 1, e);

  // backtack and merge
  return merge(left, right);
}

function merge(leftArr: number[], rightArr: number[]) {
  let newArr: number[] = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      newArr.push(leftArr[i]);
      i++;
    } else {
      newArr.push(rightArr[j]);
      j++;
    }
  }

  // add remaining arr
  if (i < leftArr.length) newArr.push(...leftArr.slice(i));
  if (j < rightArr.length) newArr.push(...rightArr.slice(j));

  return newArr;
}

console.log(mergeSort([6, 5, 4, 3, 2, 1], 0, 5));
