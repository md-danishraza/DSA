const happyNumberNoob = (num: number, map: Set<number> = new Set()) => {
  if (num == 1) {
    return true;
  }
  if (map.has(num)) {
    // loop found
    return false;
  }
  //   adding the to map
  map.add(num);

  //   calculating sum by breaking down the num
  let ans = 0;
  while (num > 0) {
    const digit = num % 10; // extract last digit
    ans += digit * digit; // square and add
    num = Math.floor(num / 10); // remove last digit
  }
  return happyNumberNoob(ans, map);
};
console.log(happyNumberNoob(1234));

// Helper function: Calculates the sum of squares
const getNext = (num: number): number => {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
};

//   function sumOfSquares(num: number): number {
//     return num
//       .toString()
//       .split("")
//       .map(d => Math.pow(Number(d), 2))
//       .reduce((a, b) => a + b, 0);
//   }

//   console.log(sumOfSquares(123)); // 1² + 2² + 3² = 14

const happyNumber = (n: number): boolean => {
  let slow = n;
  let fast = getNext(n); // Fast starts one step ahead

  // stop when found 1 or not found (slow==fast)
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow); // Move 1 step
    fast = getNext(getNext(fast)); // Move 2 steps
  }

  // If fast is 1, it's happy. If loop broke because slow === fast, it's a cycle.
  return fast === 1;
};

console.log(happyNumber(19)); // true
