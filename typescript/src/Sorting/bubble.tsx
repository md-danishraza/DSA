function bsort(arr:number[]){
    
    for(let i=0;i<arr.length;i++){
        let isSorted = true;
        // compare each adjacent element
        for(let j=0;j<arr.length-i-1;j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
              }        
        }
        // already sorted
        if(isSorted){
            break
        }
    }   

    console.log(arr)
}
const numm = [3,8,6,54,4,3,32];

bsort(numm)