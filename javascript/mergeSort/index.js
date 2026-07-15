
function mergeSort(array){
    if(array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middle);
    const rightArr = array.slice(middle);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(left, right) {
    const result = [];
    // left array pointer
    let i = 0;
    // right array pointer
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Append remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(merge([4,3,5,3,5], [34, 3, 65, 43, 6]));

console.log(mergeSort([8,7,5,4,3,2,1]));
