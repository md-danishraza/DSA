export {}



// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// L - 725
function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let ans:(ListNode | null)[] = new Array(k).fill(null)

    // first find length
    let len = 0
    let curr = head
    while(curr){
        len += 1
        curr = curr.next
    }

    let baseSize = Math.floor(len/k)
    let extra = len%k

    curr = head
    for(let i=0;i<k && curr;i++){
        ans[i] = curr

        // add 1 if extra 
        let currentPartSize = baseSize + (extra ? 1 : 0)
        if(extra) extra--;

        // Traverse to the tail of the current part
        for (let j = 0; j < currentPartSize - 1; j++) {
            curr = curr.next!;
        }

        // cut the link to form an independent sublist
        const nextPartHead = curr.next;
        curr.next = null;
        curr = nextPartHead;
    }
    return ans
};