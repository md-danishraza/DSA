export {};

function quickSort(arr: number[], s: number, e: number) {
  const recursive = () => {
    // base case
    if (s >= e) return;

    // patition sort and get new pivot
    let pivot = partitionSort(arr, s, e);

    // recursively sort left and right half
    quickSort(arr, s, pivot - 1);
    quickSort(arr, pivot + 1, e);
  };
  recursive();

  return arr;
}

function partitionSort(arr: number[], s: number, e: number) {
  // taking last element as pivot
  let pivot = arr[e];

  let i = s - 1;

  for (let j = s; j < e; j++) {
    if (arr[j] < pivot) {
      // only swap if element < pivot
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // finally place pivot in correct position
  [arr[i + 1], arr[e]] = [arr[e], arr[i + 1]];
  return i + 1; // return pivot index new
}

console.log(quickSort([6, 5, 4, 3, 2, 1], 0, 5));
