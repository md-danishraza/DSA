export {};

function uniquePaths(m: number, n: number): number {
  //   2d cache array
  const memo = Array.from({ length: m }, (v) => Array(n).fill(-1));

  const recursion = (i: number, j: number): number => {
    // Base Case: Reached the bottom-right corner destination
    if (i === m - 1 && j === n - 1) return 1;

    // Out of bounds check
    if (i >= m || j >= n) return 0;

    // memo check
    if (memo[i][j] !== -1) return memo[i][j];

    let down = recursion(i + 1, j);
    let right = recursion(i, j + 1);

    // store result
    memo[i][j] = down + right;
    return memo[i][j];
  };

  return recursion(0, 0);
}

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
