function selectionSortMin(arr: number[]) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
  
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
    }
  
    console.log(arr);
  }

  function selectionSortMax(arr: number[]) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let maxIdx = n-i-1;
  
      for (let j = 0; j < n-i; j++) {
        if (arr[j] > arr[maxIdx]) {
          maxIdx = j;
        }
      }
  
      if (maxIdx !== i) {
        [arr[n-i-1], arr[maxIdx]] = [arr[maxIdx], arr[n-1-i]];
      }
    }
  
    console.log(arr);
  }


  const nums2 = [9,8,7,6,4,3,2]
  selectionSortMin(nums2)
  selectionSortMax(nums2)