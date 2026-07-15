export {};

function radixSort(arr: number[]) {
  let largest = Math.max(...arr);

  let exponent = 1;

  // will run loop == no. of digits
  while (largest / exponent >= 1) {
    decimalCountSort(arr, exponent);

    exponent *= 10;
  }
  return arr;
}

function decimalCountSort(arr: number[], exp: number) {
  // 0 to 9
  let countArr = new Array(10).fill(0);

  for (let i of arr) {
    // get the digit place
    let digit = Math.floor(i / exp) % 10;

    countArr[digit] += 1;
  }

  //   prefix sum to get positions
  for (let i = 1; i < 10; i++) {
    countArr[i] += countArr[i - 1];
  }

  let n = arr.length;
  let ansArr = new Array(n);

  for (let i = n - 1; i > -1; i--) {
    let val = arr[i];
    // get the digit place
    let digit = Math.floor(val / exp) % 10;

    ansArr[countArr[digit] - 1] = val;

    // decrease count for that value
    countArr[digit] -= 1;
  }

  //   update the original array

  for (let i = 0; i < n; i++) {
    arr[i] = ansArr[i];
  }
}

console.log(radixSort([88, 77, 66, 55, 44, 33, 22, 99]));
