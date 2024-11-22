function check(str){
    let parentheses = 0;
    let braces = 0;
    let sqrBrackets = 0;
    
    for(let char of str) {
        // console.log(char);
        if(char === '(') parentheses++;
        else if(char === ')') parentheses--;
        else if(char === '{') braces++;
        else if(char === '}') braces--;
        else if(char === '[') sqrBrackets++;
        else if(char === ']') sqrBrackets--;
        
        if(parentheses > 0 && braces > 0 && sqrBrackets > 0) {
            console.log("Not balanced");
            return false;
        }else{
            console.log("balanced");
            return true;
        }
    }
}

console.log(check("({[()]})"));


function check2(str) {
    let stack = [];
    
    for (let char of str) {
        // Push opening brackets to the stack
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            // If stack is empty or top of stack doesn't match, return false
            if (stack.length === 0) return false;

            let top = stack.pop();
            // if current character not matches the top of the stack, return false
            if (
                (char === ")" && top !== "(") ||
                (char === "}" && top !== "{") ||
                (char === "]" && top !== "[")
            ) {
                return false;
            }
        }
    }
    
    // If stack is empty, parentheses are balanced
    return stack.length === 0;
}

console.log(check2("({[()]})")); // true
console.log(check2("({[)]}"));   // false
console.log(check2("({[]}"));    // false
