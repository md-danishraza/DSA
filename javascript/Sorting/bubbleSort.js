function bSort(array){
    let n = array.length;
    for(let i = 0; i < n-1; i++){

        for(let j = 0; j < n-i-1; j++){
            
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

let unsortedArray = [5, 3, 8, 2, 1, 9, 7];

console.log(bSort(unsortedArray)); 