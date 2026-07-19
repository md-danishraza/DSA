export {}


//  L - 287

// On approach
function findDuplicate(nums: number[]): number {
    let set = new Set()

    for(let val of nums){
        if(set.has(val)){
            return val
        }else{
            set.add(val)
        }

    }

    return 0
};

console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))


// floyd cycle detection
// linked list
// TC - On

// arr[i] is next pointer index 
// bcz values in range [1,n]
function findDuplicate2(nums: number[]): number {
    // start with first index
  let slow = nums[0];
    let fast = nums[0];

    // Find intersection
    do {
        // moves by 1 index
        slow = nums[slow];
        // moves by 2 index
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Find entrance to cycle
    let slow2 = nums[0];

    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;
};

console.log(findDuplicate2([1,3,4,2,2]))
console.log(findDuplicate2([3,1,3,4,2]))
console.log(findDuplicate2([3,1,4,4,2]))