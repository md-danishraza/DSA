export {}

// 406. Queue Reconstruction by Height

// You are given an array of people, people, which are the attributes of some 
// people in a queue (not necessarily in order). Each people[i] = [hi, ki] 
// represents the ith person of height hi with exactly ki other people in 
// front who have a height greater than or equal to hi.

// Reconstruct and return the queue that is represented by the input array people. 
// The returned queue should be formatted as an array queue, where queue[j] = [hj, kj]
//  is the attributes of the jth person in the queue (queue[0] is the person
//  at the front of the queue).

// Example 1:

// Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

// tc = nlogn + n2 = n2 
// sc = On
function reconstructQueue(people: number[][]): number[][] {
    // first sort based on decreasing height and increasing front people
    people.sort((a,b)=>{
         if (a[0] !== b[0]) {
        return b[0] - a[0]; // height descending
        }
        // if heights are equal than based on front people asc
        return a[1] - b[1];   
    })
    
    let result:number[][] = []

    for(let person of people){
        let [height,k] = person

        result.splice(k,0,person)
    }

    return result
};

console.log(reconstructQueue([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]))