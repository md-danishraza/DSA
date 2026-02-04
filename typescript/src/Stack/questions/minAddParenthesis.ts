export {};

// minimum add to make parenthesis valid
// TC/SC - O(N)
function minParenthesisRequired(parenthesis: string) {
  const stack: string[] = [];

  for (let char of parenthesis) {
    // add if its a opening
    if (char == "(") {
      stack.push(char);
    }
    // if we found closing one
    if (char == ")") {
      // if last pushed char was closing one
      if (stack[stack.length - 1] == "(") {
        // pop it
        // cancel out valid parenthesis
        stack.pop();
      } else {
        // push the char
        stack.push(char);
      }
    }
  }

  //   remaining length of the stack would be min required parenthesis
  return stack.length;
}

console.log(minParenthesisRequired("())"));
console.log(minParenthesisRequired("((("));

// TC - O(1)
// SC - O(1)
function minAddToMakeValid(s: string): number {
  let open = 0; // Represents unmatched '('
  let closed = 0; // Represents unmatched ')'

  for (let char of s) {
    if (char === "(") {
      open++;
    } else {
      // It is ')'
      if (open > 0) {
        // We have an open bracket to match this closing one
        open--;
      } else {
        // No open bracket available, so this ')' is extra
        closed++;
      }
    }
  }

  // The result is the sum of unmatched open and unmatched closed
  return open + closed;
}

console.log(minAddToMakeValid("())")); // 1
console.log(minAddToMakeValid("(((")); // 3
