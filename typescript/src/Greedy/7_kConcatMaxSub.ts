export {}


// 1191. K-Concatenation Maximum Sum

// Given an integer array arr and an integer k, modify the array by repeating it k times.
// For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].
// Return the maximum sub-array sum in the modified array. Note that the length 
// of the sub-array can be 0 and its sum in that case is 0.

// As the answer can be very large, return the answer modulo 109 + 7.

 

// Example 1:

// Input: arr = [1,2], k = 3
// Output: 9
// Example 2:

// Input: arr = [1,-2,1], k = 5
// Output: 2

class KConcatMax {
    arr:number[]
    k:number

    constructor(arr:number[],k:number){
        this.arr = arr
        this.k = k
    }

    calculate(){
         const MOD = 1_000_000_007
        // sum
        let sum = this.arr.reduce((a,b)=>a+b,0)
        // max sub array using kadanes
        const maxSub = this.kadanes()

        // Only one copy
        if (this.k === 1) {
            return maxSub % MOD
        }

        const [maxPrefix, maxSuffix] = this.getMaxes()

        let ans = Math.max(maxSub, maxPrefix + maxSuffix)

        // Complete middle copies help only when total sum > 0
        // As adding them is beneficial
        if (sum > 0) {
           ans = Math.max(
                ans,
                maxPrefix + maxSuffix + (this.k - 2) * sum
            )
        }

        return ans % MOD
    }

  
    private kadanes() {
        
        let currSum = 0
        let maxSum = 0

        for(let i=0;i<this.arr.length;i++){
            if(currSum<0){
                currSum = 0
            }

            currSum += this.arr[i]

            maxSum = Math.max(maxSum,currSum)
        }

        return maxSum
    }
    private getMaxes(): [number, number] {
       // Maximum prefix
        let prefixSum = 0
        let maxPrefix = 0

        for (const num of this.arr) {
            prefixSum += num
            maxPrefix = Math.max(maxPrefix, prefixSum)
        }

        // Maximum suffix
        let suffixSum = 0
        let maxSuffix = 0

        for (let i = this.arr.length - 1; i >= 0; i--) {
            suffixSum += this.arr[i]
            maxSuffix = Math.max(maxSuffix, suffixSum)
        }

        return [maxPrefix, maxSuffix]
    }
}