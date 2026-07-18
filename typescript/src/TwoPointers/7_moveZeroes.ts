// L - 283


/**
 Do not return anything, modify nums in-place instead.
 */
// Move all the 0's to the end of array.
// All the non-zero elements must retain their original order.

// tc n2
function moveZeroes(nums: number[]): void {
    //    shift appraoch 

   
    let right = nums.length-1

    for(let i=0;i<= right;i++){
        if(nums[i]===0){
        
            // shift this till right
            let temp = i
            while(temp<right){
                [nums[temp+1],nums[temp]] = [nums[temp],nums[temp+1]]
                temp++
            }
            // shrink right
            right--
            // stay at curren't index for consecutive zeroes
            i--

        }

        // if adjacent zero

    }
    console.log(nums)
};

moveZeroes([1,2,0,0,3,0,0,5,6])


// tc On
function moveZeroes2(nums: number[]): void {

    // pointer pointing to where the next non-zero should go.
    let left = 0;

    for (let right = 0; right < nums.length; right++) {

        // swap all non zero from right to left
        if (nums[right] !== 0) {
            [nums[left], nums[right]] =
            [nums[right], nums[left]];

            left++;
        }
        // current zero then move right 
    }
}