// Find length of the longest substring with unique chars. (Answer: "abc", length 3).

function longestSubstring(str) {
  let left = 0;
  let right = 0;
  let length = 0;

  // set to check unnique chars
  const chars = new Set();

  // start from right and insert value
  // if value exist in set keep removing fromt left

  while (right < str.length) {
    while (chars.has(str[right])) {
      chars.delete(str[left]);
      left++;
    }

    // extend window size
    chars.add(str[right]);
    // update length
    length = Math.max(length, right - left + 1);
    right++;
  }

  return length;
}

console.log(longestSubstring("abcabcdebb"));
