export {}

// L - 503
// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] 
//     is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its 
// traversing-order next in the array, which means you could search circularly 
// to find its next greater number. If it doesn't exist, return -1 for this number.


// Tc = On2
function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = [];

    for (let i = 0; i < n; i++) {

        let found = false;

        for (let step = 1; step < n; step++) {

            const idx = (i + step) % n;

            if (nums[idx] > nums[i]) {
                ans.push(nums[idx]);
                found = true;
                break;
            }
        }

        if (!found)
            ans.push(-1);
    }

    return ans;
};

console.log(nextGreaterElements([1,2,1]))
console.log(nextGreaterElements([1,2,3,4,3]))


// approach 2 using monotic stack (strictly increasing (next greater))
// Tc = On , SC = On

function nextGreaterElements2(nums: number[]): number[] {

    let n = nums.length
    // ans arr with negative or no answers
    let ansArr:number[] = new Array(n).fill(-1)
    // stack 
    let stack:number[] = []

    // iterating 2 times (for circularity check)
    for(let i=0;i<2*n;i++){

        // get index
        let idx = i%n

        // while current element is greater than the last one 
        // from stack , then store to ansArr
        while(stack.length && nums[idx]>nums[stack[stack.length-1]]){
            // get its index
            let top = stack.pop()
            // add to its index in ansArr
            ansArr[top!] = nums[idx]
        }

        // if its first loop
        // then push idx to stack last element
        if(i<n){
            stack.push(idx)
        }
    }

    return ansArr

}

console.log(nextGreaterElements2([1,2,1]))
console.log(nextGreaterElements2([1,2,3,4,3]))