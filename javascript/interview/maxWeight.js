// maximum combined weight of pairs
// return -1 if not exist
// input weights[] k=

function maxWeight(weights, k) {
  weights = weights.sort((a, b) => a - b);

  // starting with two pointers
  let left = 0;
  let right = weights.length - 1;

  let maximum = -1;

  while (left < right) {
    //  calculate total
    total = weights[left] + weights[right];
    if (total <= k) {
      maximum = Math.max(maximum, total);
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maximum;
}

w1 = [10, 20, 30];
w2 = [60, 40];
console.log(maxWeight(w1, 45));
console.log(maxWeight(w2, 90));
