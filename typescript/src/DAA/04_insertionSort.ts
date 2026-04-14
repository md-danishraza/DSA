export {};

function insertionSort(arr: number[]) {
  let n = arr.length;

  //   building sorted array LHS
  for (let i = 1; i < n; i++) {
    // start of LHS
    let j = i - 1;
    let key = arr[i];
    // shift greater element
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // place i just after j
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([6, 5, 4, 3, 2, 1]));
