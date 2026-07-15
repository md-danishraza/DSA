function insertionSort(arr: number[]): void {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
  
      // Shift elements of arr[0..i-1] that are greater than key
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key;
    }
  
    console.log(arr);
  }

  const nums3 = [9,8,76,5,4,43,34]
  insertionSort(nums3)