export {}
// L - 946

// Given two integer arrays pushed and popped each with distinct values, 
// return true if this could have been the result of a sequence of push 
// and pop operations on an initially empty stack, or false otherwise.

 

// Example 1:

// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true


// Tc = sc = On
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  
    let popIndex = 0
    let myStack = []


    for(let num of pushed){
        myStack.push(num)
       

        // popcheck
        while(myStack.length && myStack[myStack.length-1] === popped[popIndex]){
            // remove from stack
            myStack.pop()
            // move in popped list
            popIndex+=1
        }
    }

    // if length is 0 then it was a valid stack lists 
    return myStack.length === 0 ;
};

console.log(validateStackSequences([1,2,3,4,5],[4,3,5,1,2]))
console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]))