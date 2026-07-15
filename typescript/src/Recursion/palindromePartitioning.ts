// leetcode 131
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

function palindromePartitioning(s: string) {
  // creating array of string array
  const ansArr: string[][] = [];
  // partitions array
  const partitions: string[] = [];

  recursive(0, s, partitions, ansArr);

  console.log(ansArr);
}

function recursive(
  i: number,
  str: string,
  partitions: string[],
  ansArr: string[][]
) {
  const n = str.length;

  // base case
  // can't partition more
  if (i === n) {
    // add to ans array
    ansArr.push([...partitions]);
    return true;
  }

  // loop from i to n to check for all valid partitioning
  for (let j = i; j < n; j++) {
    if (isPalindrome(str, i, j)) {
      // check to further path
      partitions.push(str.slice(i, j + 1));
      // increase the partitioning index for next call
      recursive(j + 1, str, partitions, ansArr);
      // reset the partitioning index for next loop
      partitions.pop();
    }
  }

  return false;
}
function isPalindrome(str: string, i: number, j: number) {
  while (i <= j) {
    if (str.charAt(i++) != str.charAt(j--)) return false;
  }

  return true;
}

palindromePartitioning("aabb");
