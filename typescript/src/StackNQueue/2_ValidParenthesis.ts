export {}


// L-1249 
// MINIMUM REMOVE TO MAKE VALID PARENTHISIS

/*
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any 
positions ) so that the resulting parentheses string is valid and return any 
valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.


*/

function minRemoveToMakeValid(s: string): string {

    const res: string[] = [];
    let open = 0;

    // First pass
    for (const ch of s) {

        if (ch === '(') {
            res.push(ch);
            open++;

        } else if (ch === ')') {

            if (open > 0) {
                res.push(ch);
                open--;
            }

        } else {
            res.push(ch);
        }
    }

    // Second pass
    const filtered: string[] = [];

    for (let i = res.length - 1; i >= 0; i--) {

        if (res[i] === '(' && open > 0) {
            open--;
        } else {
            filtered.push(res[i]);
        }
    }

    filtered.reverse();

    return filtered.join('');
}

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("))(("));