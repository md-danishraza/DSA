export {};

function countSort(arr: number[]) {
  let n = arr.length;

  // largest
  let largest = Math.max(...arr);

  // count arr
  let countArr: number[] = new Array(largest + 1).fill(0);
  // count frequency
  for (let i of arr) {
    countArr[i] += 1;
  }

  //   compute prefix sum
  for (let i = 1; i <= largest; i++) {
    countArr[i] += countArr[i - 1];
  }

  let ansArr: number[] = new Array(n);

  //   built ans arr
  // in reverse
  for (let i = n - 1; i > -1; i--) {
    let val = arr[i];
    ansArr[countArr[val] - 1] = val;

    // Decrementing the prefix sum so the next duplicate
    // is placed one slot to the left
    countArr[val] -= 1;
  }

  return ansArr;
}

console.log(countSort([7, 3, 5, 4, 3, 6, 5, 4, 3, 2, 1, 0]));
