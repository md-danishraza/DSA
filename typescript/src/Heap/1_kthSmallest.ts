export {}

// 378. Kth Smallest Element in a Sorted Matrix
// Given an n x n matrix where each of the rows and columns is sorted in ascending order,
//  return the kth smallest element in the matrix.
// Note that it is the kth smallest element in the sorted order, not the kth distinct element.
// You must find a solution with a memory complexity better than O(n2).

 

// Example 1:
// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13


function kthSmallest(matrix: number[][], k: number): number {
    
    // brute force
    let sorted:number[] = []

    for(let arr of matrix){
        sorted.push(...arr)
    }
    return sorted[k-1]
};

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]],8))


// heap approach

// min heap DS
type Node = {
    value: number;
    row: number;
    col: number;
};

class MinHeap {
    private heap: Node[] = [];

    size(): number {
        return this.heap.length;
    }

    push(node: Node): void {
        this.heap.push(node);
        this.bubbleUp();
    }

    pop(): Node {
        const min = this.heap[0];

        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return min;
    }

    private bubbleUp(): void {
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent].value <= this.heap[i].value) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    private bubbleDown(): void {
        let i = 0;

        while (true) {
            let smallest = i;

            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (
                left < this.heap.length &&
                this.heap[left].value < this.heap[smallest].value
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].value < this.heap[smallest].value
            ) {
                smallest = right;
            }

            if (smallest === i) {
                break;
            }

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }
    }
}

function kthSmallest2(matrix: number[][], k: number): number {
    
    const n = matrix.length
    const heap = new MinHeap()

    // insert first element of every row
    for(let i=0;i<n;i++){
        // value, row , col
        heap.push({
                    value: matrix[i][0],
                    row:i,
                    col: 0
                });
            }

    // remove k - 1 smallest
    for(let i=1;i<k;i++){
        let {value,row,col} = heap.pop()

        // if right exist of this element
        if(col+1 < n){
            heap.push({value:matrix[row][col+1],row,col:col+1})
        }
    }

    // return kth smallest element
    return heap.pop().value
}

console.log(
    kthSmallest2(
        [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15]
        ],
        8
    )
);