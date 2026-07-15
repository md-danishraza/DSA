
function reverseStr(string){
    if (string.length == 0) return string;

    const arr = string.split("");
    const reversed = arr.reverse();
    return reversed.join('');

}

const namee = "danish";
console.log(reverseStr(namee));

