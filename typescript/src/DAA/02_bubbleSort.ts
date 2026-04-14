export {};

function bubbleSort(arr: number[]) {
  const n = arr.length;

  // comparing adjacent elements
  for (let i = 0; i < n; i++) {
    let isSwapped = false;
    // 0 to n-i-1 for each outer loop
    for (let j = 0; j < n - i - 1; j++) {
      // swap
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return arr;
}

console.log(bubbleSort([6, 5, 4, 3, 2, 1]));
