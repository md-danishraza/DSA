export {}

// A company is planning to interview 2n people. Given the array costs 
// where costs[i] = [aCosti, bCosti], the cost of flying the ith person
//  to city a is aCosti, and the cost of flying the ith person to city b
//  is bCosti.

// Return the minimum cost to fly every person to a city such that exactly
//  n people arrive in each city.

 

// Example 1:

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110

function twoCitySchedCost(costs: number[][]): number {
    let diff:number[][] = [
    ]

    for(let [c1,c2] of costs){
        diff.push([c2-c1,c1,c2])
    }

    diff.sort()
    let res = 0
    for(let i=0;i<diff.length;i++){
        if(i<(diff.length/2)){
            res += diff[i][2]
        }else{
            res += diff[i][1]
        }
    }

    return res
};