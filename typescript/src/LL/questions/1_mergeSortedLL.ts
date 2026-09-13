

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


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let left = list1
    let right = list2
    let newHead = new ListNode(0)
    let curr = newHead

    while (left && right){
        if (left.val <= right.val) {
            curr.next = left;
            left = left.next;
        } else {
            curr.next = right;
            right = right.next;
        }
        curr = curr.next;
    }

    curr.next = left !== null ? left : right;


    return newHead.next
}