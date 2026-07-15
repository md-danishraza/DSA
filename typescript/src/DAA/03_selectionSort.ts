export {};

function selectionSort(arr: number[]) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // finding min element index for each outer loop
    // and placing to its correct position
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      }
    }

    // swapping i with min index
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
}

console.log(selectionSort([6, 5, 4, 3, 2, 1]));
