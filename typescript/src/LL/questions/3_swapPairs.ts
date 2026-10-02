export {}


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// L -24 
function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) { return head }

    let first: ListNode | null = head
    let second: ListNode | null = head?.next

    // New head after first swap 
    const newHead = second 
    // Previous pair's tail 
    let prev: ListNode | null = null


    while(first && second){
        // swap
        let temp: ListNode | null = second.next

        second.next = first
        first.next = temp

        // connect prev pair to curr pairs
        if(prev){
            prev.next = second
        }

        // move to next pair
        prev = first
        first = temp
        second = first?.next ?? null
    }

    return newHead;
};