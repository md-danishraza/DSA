export {}


//  l - 739
function dailyTemperatures(temperatures: number[]): number[] {
    let n = temperatures.length
    let stack:number[] = []
    let ansArr:number[] = new Array(n).fill(0)
    for(let i=0;i<n;i++){
        while(stack.length && temperatures[i]>temperatures[stack[stack.length-1]]){
            let top = stack.pop()!
            // insert diff in last element index
            ansArr[top] = i-top
        }


        // push to stack , curr index
        stack.push(i)
    }

    return ansArr
};


console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log(dailyTemperatures([30,40,50,60]))