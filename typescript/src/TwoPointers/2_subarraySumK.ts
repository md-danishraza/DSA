export {}


// two pointers approach
// n2
// sc = o1
function subarraySum2(nums: number[], k: number): number {

  let count  = 0

  for(let i=0;i<nums.length;i++){
    let temp = 0
    
    for(let j=i;j<nums.length; j++){
      temp += nums[j]

      // if subarray found
      if(temp === k){
        count += 1
        // // check for next subarray
        // break
      }
    //   if(temp> k) break;
    }
  }

  return count
    
};

console.log(subarraySum2([1,1,1],2))
console.log(subarraySum2([1,2,3],3))



// tc = n
//  sc = n
function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let currentSum = 0;
  
  // Maps running prefix sums to how many times we have seen them
  const prefixMap = new Map<number, number>();
  
  // Base case: A prefix sum of 0 has occurred 1 time (representing an empty prefix)
  prefixMap.set(0, 1);

  for (let num of nums) {
    currentSum += num;

    // If (currentSum - k) occurred in the past, those previous points 
    // mark the starts of subarrays that sum exactly to k!
    if (prefixMap.has(currentSum - k)) {
      count += prefixMap.get(currentSum - k)!;
    }

    // Update the frequency of the current prefix sum
    prefixMap.set(currentSum, (prefixMap.get(currentSum) || 0) + 1);
  }

  return count;
}