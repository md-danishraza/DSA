export {}

import {MaxHeap} from "./maxHeap"

// leetcode - 218

// TC = Nlogn (sorting), SC = On
// TC = N2 because of arbitrary element deletion from heap
function getSkyline(buildings: number[][]): number[][] {

    const events:[number,number,number][] = []
    
    for(let [left,right,height] of buildings){
        // [x, height, end]
        // +ve height = start
        events.push([left,height,right])
        // -ve height = end
        events.push([right,-height,right])
    }    


    // sort asc using x
    events.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        // if start is same then desc height
        return b[1] - a[1]; // Handles all three tie cases when Start is +ve and End is -ve
        });

     const heap = new MaxHeap();
    //  [x,height]
    const ans: number[][] = [];

    let currMax = 0

    for(let [x,height,end] of events){

        // if height is +ve
        // means its start 
        if(height>0){
            heap.insert(height)
        }else{
            // height is negative , means its end of this building
            // -(-ve) = +ve
            heap.removeValue(-height)
        }

        // check currmax change for very event
        // get max if not then 0
        let newMax = heap.peek() ?? 0;

        // if change in max than its a edge
        if(newMax !== currMax){
              //  [x,height]
            ans.push([x,newMax])
            // update currMax
            currMax = newMax
        }
    }

    return ans
};


console.log(getSkyline( [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]))