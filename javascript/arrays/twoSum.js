// find the index of two numbers whose sum == target
function twoSum(array,target){

    let result = [];
    for(let i = 0; i < array.length; i++){
        for(let j = i; j < array.length; j++){
            if(array[i] + array[j] === target){
                result.push(i,j);
            }
        }
    }
    return result;
}

let array = [2, 7, 11, 15,34,23,4,54,4354];

console.log(twoSum(array, 58)); // output: [[0,1]]