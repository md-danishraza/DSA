export {}


type Node = {
    val: number;
    row: number;
    col: number;
};

class MinHeap {
    heap: Node[] = [];

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(node: Node) {
        this.heap.push(node);
        this.bubbleUp();
    }

    pop(): Node {
        const top = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return top;
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let p = Math.floor((i - 1) / 2);

            if (this.heap[p].val <= this.heap[i].val)
                break;

            [this.heap[p], this.heap[i]] =
                [this.heap[i], this.heap[p]];

            i = p;
        }
    }

    bubbleDown() {
        let i = 0;

        while (true) {

            let smallest = i;

            let l = 2 * i + 1;
            let r = 2 * i + 2;

            if (
                l < this.heap.length &&
                this.heap[l].val < this.heap[smallest].val
            )
                smallest = l;

            if (
                r < this.heap.length &&
                this.heap[r].val < this.heap[smallest].val
            )
                smallest = r;

            if (smallest == i)
                break;

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }
    }
}





//  l - 632
// smallest range covering elements from k lists

// You have k lists of sorted integers in non-decreasing order. 
// Find the smallest range that includes at least one number from each of the k lists.


function smallestRange(nums: number[][]): number[] {

    // to track minimal value
    const heap = new MinHeap();

    let currentMax = -Infinity;

    // put first element of every row
    // also find maximum value 
    // so it will our first list group(vertical)
    for (let r = 0; r < nums.length; r++) {

        heap.push({
            val: nums[r][0],
            row: r,
            col: 0
        });

        currentMax = Math.max(currentMax, nums[r][0]);
    }

    let start = 0;
    let end = Infinity;

    // should contain one elements from all list
    while (heap.size() === nums.length) {
        // get min value 
        const { val, row, col } = heap.pop();

        // check answer
        // update range if current group has smaller one
        if (currentMax - val < end - start) {
            start = val;
            end = currentMax;
        }

        // row exhausted
        // break even if single list exhaust
        // as we can't form group 
        if (col + 1 === nums[row].length)
            break;

        // move to next element in smallest one list
        const next = nums[row][col + 1];
        
        // push new value (while heap takes of finding minimum)
        heap.push({
            val: next,
            row,
            col: col + 1
        });

        // update max 
        currentMax = Math.max(currentMax, next);

        // repeat 
    }

    return [start, end];
}



console.log(smallestRange([[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]))
console.log(smallestRange([[1,2,3],[1,2,3],[1,2,3]]))




































