export {};

function gameofstack(maxSum: number, A: number[], B: number[]) {
  // pointers
  let currentSum = 0;
  let countA = 0;
  let countB = 0;
  let maxCount = 0;

  //   adding all element from stack A
  for (let value of A) {
    if (value + currentSum > maxSum) break;
    else {
      currentSum += value;
      countA++;
    }
  }

  //   baseline for global max count
  maxCount = countA;

  //   trying to add element from B one by one
  for (let value of B) {
    // add element
    currentSum += value;
    countB++;

    // while sum is greater remove from A
    while (currentSum > maxSum && countA) {
      // remove last element from A
      currentSum -= A[countA - 1];
      countA--;
    }

    if (currentSum <= maxSum) {
      // select the maximum count
      maxCount = Math.max(maxCount, countA + countB);
    } else {
      // so if sum is still greater than we have no smaller element in B

      break;
    }
  }

  return maxCount;
}

// const a = [4, 2, 4, 6, 1];
// const b = [2, 1, 8, 5];
const a = [8, 1, 1, 1];
const b = [5, 5, 5];
const x = 10;

console.log(gameofstack(x, a, b));
