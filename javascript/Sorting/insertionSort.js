// insertion sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // temp key for comparison
        let key = arr[i];
        let j = i - 1;

        // shift elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // if element is not greater than key then insert the the key at that position
        // +1 because of posrt decrement in above loop
        arr[j + 1] = key;
    }

    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];

console.log(insertionSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]