export {}

//  L - 1047

/*
You are given a string s consisting of lowercase English letters. 
A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.
Return the final string after all such duplicate removals have been made. 
It can be proven that the answer is unique.

 

Example 1:
Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and 
equal, and this is the only possible move.  The result of this move is that the 
string is "aaca", of which only "aa" is possible, so the final string is "ca".

*/


function removeDuplicates(s: string): string {
   

    // using stack to track last adjacent
    let stack:string[] = []

    for(let i=0;i<s.length;i++){
        // flag for duplicate
        let duplicateFound = false
        if(stack.length && stack[stack.length-1]===s[i]){
            stack.pop()
            duplicateFound = true
        }
        if (!duplicateFound)   stack.push(s[i])
    }

    // create outpur string of rem
    return stack.join("")
};

console.log(removeDuplicates('abbaca'))
console.log(removeDuplicates('azxxzy'))