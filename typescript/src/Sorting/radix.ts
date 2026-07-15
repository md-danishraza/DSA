export {};
function radixSort(arr: number[]) {
  const max_value = Math.max(...arr);

  let exp = 1;

  // this will iterate loop = no. of digits
  while (max_value / exp >= 1) {
    countSort(arr, exp);
    exp *= 10;
  }
}

function countSort(arr: number[], exp: number) {
  const n = arr.length;

  // count arr [1,9]
  // inititalize with zero
  const countArr = new Array(10).fill(0);

  // output arr
  const outputArr = new Array(n).fill(0);

  // count occurrences
  for (let value of arr) {
    // extracting the exact digit
    // this shift target number to ones place
    const index = Math.floor(value / exp);
    // modulo with 10 give the above numbers ones/unit place
    countArr[index % 10] += 1;
  }

  // converts frequencies into positions
  for (let i = 1; i < 10; i++) {
    countArr[i] += countArr[i - 1];
  }

  // building output array
  // backward looping cause of cumulative sum we will get the last index
  // this way it will be stable
  for (let i = n - 1; i >= 0; i--) {
    let value = Math.floor(arr[i] / exp);
    const position = countArr[value % 10] - 1;
    outputArr[position] = arr[i];
    // decreasing the count
    countArr[value % 10] -= 1;
  }

  // copying to original array
  for (let i = 0; i < n; i++) {
    arr[i] = outputArr[i];
  }

  console.log(arr);
}

const nums = [22, 33, 44, 1, 3, 45, 555, 7, 7, 7766, 33];

radixSort(nums);
