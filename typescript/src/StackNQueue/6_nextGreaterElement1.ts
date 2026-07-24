export {}


//  L - 496 

// Tc=Sc = On
// stack + map
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    
    let stack:number[] = []
    let map = new Map()

    // create map for next greater in nums2
    // since num1 is subset
    for(let num of nums2){
        // check with last num 
        while(stack.length && num>stack[stack.length-1]){
            let top = stack.pop()
            // set num as its next greater
            map.set(top,num)
        }

        // push num in stack
        stack.push(num)
    }
    // insert -1 in not remaining values
    while(stack.length){
        map.set(stack.pop(),-1)
    }

    // return ans
    let ansArr:number[] = []
    // since num1 is subset of num2 (so map will have all values)
  for(let num of nums1){
    ansArr.push(map.get(num))
  }

  return ansArr
};

