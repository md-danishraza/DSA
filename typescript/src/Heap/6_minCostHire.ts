// 857. Minimum Cost to Hire K Workers

// There are n workers. You are given two integer arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.

// We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them according to the following rules:

// Every worker in the paid group must be paid at least their minimum wage expectation.
// In the group, each worker's pay must be directly proportional to their quality. This means if a worker’s quality is double that of another worker in the group, then they must be paid twice as much as the other worker.
// Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. Answers within 10-5 of the actual answer will be accepted.

export {}

import { MaxHeap } from "./maxHeap"

function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
    let res:number = Infinity

    // pairs=rate,quality
    let pairs:[number,number][] = []
    for(let i=0;i<wage.length;i++){
        pairs.push([wage[i]/quality[i],quality[i]])
    }
    // sort
    pairs.sort((a, b) => a[0] - b[0]);

    let maxHeap = new MaxHeap()
    // per window
    let totalQuality = 0

    for(let [ratio,q] of pairs){
        maxHeap.insert(q)
        totalQuality += q

        if(maxHeap.size > k){
            totalQuality -= maxHeap.remove()!

        }

        if(maxHeap.size == k){
            res = Math.min(
                res,
                ratio * totalQuality
            )
        }
    }
    return res
};

console.log(mincostToHireWorkers([10,20,5],[70,50,30],2))