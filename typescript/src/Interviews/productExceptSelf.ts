export {}


function productExceptSelf(nums: number[]): number[] {
    const n:number = nums.length

    // prefix arr
    const prefix:number[] = Array(n).fill(1)
    // suffix arr
    const suffix:number[] = Array(n).fill(1)
    

    for(let i=1;i<n;i++){
        // product till last num
        prefix[i] = nums[i-1] * prefix[i-1]
    }
    for (let i=n-2;i>-1;i--){
        suffix[i] = nums[i+1] * suffix[i+1]
    }

    // create product
    const ans:number[] = Array(n)
    for(let i=0;i<n;i++){
        ans[i] = prefix[i] * suffix[i]
    }

    return ans;
};