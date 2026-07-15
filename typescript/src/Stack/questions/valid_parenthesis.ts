export {};

function isValidParenthesis(strings: string): boolean {
  // if odd its invalid
  if (strings.length % 2 !== 0) return false;

  const stack: string[] = [];

  //   record<key,value>
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  //   iterating over chars
  for (const char of strings) {
    // If it is a closing bracket
    if (map[char]) {
      // if stack is empty return false
      if (!stack.length) return false;
      // Get the top element of the stack
      const topElement = stack.pop();

      // If the top doesn't match the corresponding opening bracket
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      // It's an opening bracket, push to stack
      stack.push(char);
    }
  }

  // Stack must be empty for it to be valid
  return stack.length === 0;
}

console.log(isValidParenthesis("()[]{}"));
console.log(isValidParenthesis("(]"));
console.log(isValidParenthesis("([)]"));
console.log(isValidParenthesis("{[]}"));
