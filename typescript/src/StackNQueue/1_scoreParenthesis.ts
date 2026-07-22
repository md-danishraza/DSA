//  l - 856 



/*
Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

"()" has score 1.
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.

*/

// () = 1
//  (()) = nested 2*1
// ((())) = 2 * (2*1) = 4

 
export {}


class stack<T> {
  array: T[] = [];
  size: number = 0;

  push(value: T) {
    this.array.push(value);
    this.size++;
  }

  pop() {
    if (!this.size) {
      console.log("stack empty");
      return;
    }
    this.size--;
    return this.array.pop();
  }

  peek() {
    if (!this.size) {
      console.log("stack empty");
      return;
    }
    return this.array[this.array.length - 1];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}



// code

//  tc = sc = On

function scoreOfParentheses(s: string): number {
    // inner score for each pair
    let myStack = new stack<number>()
    let score = 0

    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            // push score to stack
            myStack.push(score)
            score = 0
        }else{
            // update score with last valid 
            // value_of_current_pair =
            // primitive ? 1
            //           : 2 × innerScore
            score = myStack.pop()! + Math.max(2 * score, 1)
        }
    }

    return score
}

console.log(scoreOfParentheses("((()))"))
console.log(scoreOfParentheses("(()(()))"))
console.log(scoreOfParentheses("()()"))






 