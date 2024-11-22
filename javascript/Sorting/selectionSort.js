// selection sort
function sSortMax(array){
    const n = array.length-1;
    for(let i = 0; i < n; i++){
        let max = n-i;
        for(let j = 0; j <= n-i; j++){
            if(array[j] > array[max]){
                max = j;
            }
        }
        // replace max with last element
        const temp = array[n-i];
        array[n-i] = array[max];
        array[max] = temp; // place max at its correct position in sorted part of array

    }

    return array;
}

function sSortMin(array){
    const n = array.length-1;
    for(let i = 0; i <= n; i++){
        let min = i;
        for(let j = i+1; j <= n; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        // replace min with last element
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp; // place max at its correct position in sorted part of array

    }

    return array;
}

let array = [5, 2, 8, 1, 3, 9, 6, 7];

// console.log(sSortMax(array)); // output: [1, 2, 3, 5, 6, 7, 8, 9]

console.log(sSortMin(array)); // output: [