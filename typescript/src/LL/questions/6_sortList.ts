export {}


 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 
// L - 148 

// Merge Sort consists of three steps:

// Split in half (Divide): Use the Fast & Slow Pointer technique to find the middle 
// node of the list, then sever the connection (prev.next = null or slow.next = null)
//  to cut the list into two independent halves.

// Recurse: Recursively call sortList on the left half and right half until you
//  reach base cases (0 or 1 node).

// Merge (Conquer): Merge the two sorted halves together using the standard 
// mergeTwoLists pointer splice.

// TC = NLogN (merge sort), SC = O1

function sortList(head: ListNode | null): ListNode | null {
   // 0 or 1 node is already sorted
    if (!head || !head.next) {
        return head;
    }

    // find middle using slow and fast pointer
    // prev node of slow (middle one)
    let prev: ListNode | null = null
    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while(fast && fast.next){
        prev = slow
        slow = slow!.next
        fast = fast.next.next
    }

    // break link (make separate list)
    prev!.next = null

    // recursively divide it till base case
    const left = sortList(head)
    const right = sortList(slow)

    // merge 
    return mergSort(left,right);
};


function mergSort(left: ListNode | null,right: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let curr = dummy;

    while(left && right){
        if(left.val < right.val){
            curr.next = left
            left = left.next
        }else{
            curr.next = right
            right = right.next
        }

        curr = curr.next;
    }

    // add remaining
    curr.next = left ? left : right;
    return dummy.next
}