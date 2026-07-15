function IntReversal(element){
    return parseInt(element.toString().split('').reverse().join(''), 10);
}

let number = 12345;

console.log(IntReversal(number)); 