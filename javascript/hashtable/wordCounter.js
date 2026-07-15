const name = "hello hi by hi by hello hi";

function count(str){
    const words = str.toLowerCase().split(" ");
    // let count = 0;
    const counter = {};

    for(let word of words){
        if(counter[word]){
            counter[word]++;
        } else {
            counter[word] = 1;
        }
    }
    
    return counter;
};

console.log(count(name));