export {}


// l - 445

// You are given two non-empty linked lists representing two non-negative
//  integers. The most significant digit comes first and each of their nodes
//  contains a single digit. Add the two numbers and return the sum as a linked 
// list.

// You may assume the two numbers do not contain any leading zero, except the
//  number 0 itself.



// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// TC = SC = N + M = list traversal and stacks
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const s1:number[] = []
    const s2:number[] = []

    // push digits to stack
    while(l1){
        s1.push(l1.val)
        l1 = l1.next
    }
    while(l2){
        s2.push(l2.val)
        l2 = l2.next
    }

    // sum from LSD to MSD while prepending ans LL
    let head:ListNode | null = null
    let carry:number = 0
    // if any one exist then run
    while(s1.length || s2.length || carry){
        let d1:number = s1.length ? s1.pop()! : 0
        let d2:number = s2.length ? s2.pop()! : 0

        // sum
        let sum = d1 + d2 + carry

        // carry forward MSD
        let MSD = Math.floor(sum/10)
        carry = MSD

        // prepend new node (LSD)
        let LSD = sum % 10
        let newNode = new ListNode(LSD)
        newNode.next = head
        head = newNode
    }

    return head;
};