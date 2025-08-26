// backtracking test

function test(N: number) {
  if (N == 0) return;

  test(N - 1);
  console.log(N);
}

// test(10);

// sum of first N
// 1. parameterised
function firstN(n: number, sum: number = 0) {
  if (n == 0) {
    console.log(sum);
    return;
  }
  firstN(n - 1, sum + n);
}
firstN(5);
function firstNFib(n: number, fibs: number[] = [0, 1]) {
  if (n == 1) {
    console.log(fibs);
    return;
  }
  const len = fibs.length;
  fibs.push(fibs[len - 1] + fibs[len - 2]);
  firstNFib(n - 1, fibs);
}
console.log(firstNFib(5));
// 2. functional approach - using fn returns
function firstN2(n: number): number {
  if (n == 0) {
    return n;
  }
  return n + firstN2(n - 1);
}

console.log(firstN2(5));
function factorial(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// check palindrome of a string
// reversal reads the same
function strPalindrome(str: string, newstr: string = "", i: number = 0) {
  if (i === str.length) {
    console.log(newstr);
    if (str === newstr) return true;
    else return false;
  }
  newstr = newstr.concat(str.charAt(str.length - 1 - i));

  return strPalindrome(str, newstr, i + 1);
}
console.log(strPalindrome("dad"));
