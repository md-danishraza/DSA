function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    else {
      left++;
      right--;
    }
  }

  return true;
}

function checkPairs(words) {
  const pairs = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      // Don't pair a word with itself
      if (i === j) continue;

      const combined = words[i] + words[j];

      if (isPalindrome(combined)) {
        pairs.push([i, j]); // Store indices
      }
    }
  }

  return pairs;
}

const words = ["bat", "tab", "cat"];
console.log(checkPairs(words));
