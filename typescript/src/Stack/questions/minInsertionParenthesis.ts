export {};
// minimum insertion to balance a parenthesis string

// Given a parentheses string s containing only the characters '(' and ')'. A parentheses string is balanced if:

// Any left parenthesis '(' must have a corresponding two consecutive right parenthesis '))'.
// Left parenthesis '(' must go before the corresponding two consecutive right parenthesis '))'.

// for one open we need two close
function minInsertion(s: string) {
  let open = 0; // Tracks unmatched '(' waiting for '))'
  let ans = 0; // Tracks actual insertions needed

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      // adding opens
      open++;
    } else {
      // We found a closing ')'

      // Step 1: Handle the double '))' requirement
      // Check if the very next char is also ')'
      if (i + 1 < s.length && s[i + 1] === ")") {
        i++; // Skip the next character, we used it as a pair
      } else {
        // The next char is NOT ')', so we have a single ')'
        // We MUST insert one ')' to make it valid
        ans++;
      }

      // Step 2: Handle the matching '('
      //   if open exist then match it
      if (open > 0) {
        open--;
      } else {
        // We have a '))' group but no open bracket to match it.
        // We MUST insert a '('
        ans++;
      }
    }
  }

  // Step 3: Handle leftover open brackets
  // Any remaining '(' needs two closing '))' each
  ans += open * 2;

  return ans;
}

// Tests
console.log(minInsertion("(()))")); // Output: 1 (Needs one ')' at the end)
console.log(minInsertion("())")); // Output: 0 (Already balanced)
console.log(minInsertion(")))((")); // Output: 3 (Insert '(' at start, then '))' and '))' at end)
