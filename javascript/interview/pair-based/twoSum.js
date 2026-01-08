// Find two numbers in an array that add up to a specific target.
// return indices array [x,x]

// O(n2)
function twoSumBruteForce(arr, k) {
  const ans = [-1, -1];
  // nested loops
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        ans[0] = i;
        ans[1] = j;
        break;
      }
    }
  }
  return ans;
}

console.log(twoSumBruteForce([1, 2, 4, 2, 10], 14));

//2. two pointers

//3. n+n = 2n = n -> expected
function twoSum(arr, k) {
  // will use map to store needed nums after subracting the current one
  // no use of loop
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let neededNum = k - currNum;

    // checking map
    if (map.has(neededNum)) {
      return [map.get(neededNum), i];
    } else {
      // add to map
      map.set(currNum, i);
    }
  }
}

console.log(twoSum([1, 2, 4, 2, 10], 14));
