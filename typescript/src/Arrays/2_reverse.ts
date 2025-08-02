function reverse<T>(arr: Array<T>): Array<T> {
  let end = arr.length - 1;
  let start = 0;

  while (start < end) {
    // extra variable approach
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    // other option
    // [arr[start], arr[end]] = [arr[end], arr[start]];

    // update the index
    start++;
    end--;
  }

  return arr;
}

const nums = [1, 3, 4, 52, 25, 76, 2];
console.log(reverse<number>(nums));
