// when reverse string is same

function palindrome(string){
    if (string.length == 0) return string;

    const arr = string.split("");
    let reversed = arr.reverse();
    reversed = reversed.join('');

    let flag = true;
    for (let i = 0;i < arr.length;i++) {
        if(string.charAt(i)!== reversed.charAt(i)) {
            flag = false;
            break
        }
    }
    return flag;

}

const namee = "abba";
console.log(palindrome(namee)); 