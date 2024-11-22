function reverse(string){
    const stack = [];
    for(let char of string){
        stack.push(char);
    }
    let reversed = '';
    while(stack.length > 0){
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverse('Hello World')); // Output: dlroW olleH