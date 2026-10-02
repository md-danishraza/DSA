export {}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {

    let curr: ListNode | null = head
    let prev: ListNode | null = null
    while(curr){
        let next = curr.next
        // reverse pointer
        curr.next = prev
        // move pointer
        prev = curr
        curr = next
    }
    // new head 
    return prev
}


function reverseListRec(head: ListNode | null): ListNode | null {
    // Base case
    if (!head || !head.next) {
        return head
    }

    // Reverse the rest of the list
    const newHead = reverseList(head.next)

    // Reverse the current connection
    // next node points to head (current node)
    head.next.next = head
    // current node points null
    head.next = null

    return newHead
}





//  L - 92
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    // empty or no range
    if (!head || left === right) return head;

    let dummyNode = new ListNode(0)
    // dummy points to head
    dummyNode.next = head

    // left prev
    let LP:ListNode | null = dummyNode
    let curr:ListNode | null = head

    for(let i=0;i<left-1;i++){
        LP = curr!
        curr = curr?.next || null
    }

    // reverse 
    let prev = LP
    for(let i=0;i<right-left+1;i++){
        let next = curr?.next

        if(i === 0){
            curr!.next = null
        }else{

            curr!.next = prev
        }
        prev = curr!
        curr = next!
    }

    // left prev will point to prev
    let temp = LP.next
    LP.next = prev
    // left prev next will point to curr
    temp!.next = curr

    // return new head
    return dummyNode.next
};