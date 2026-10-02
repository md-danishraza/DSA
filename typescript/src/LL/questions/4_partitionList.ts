export {}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
// l - 86
function partition(head: ListNode | null, x: number): ListNode | null {
    
    let left:ListNode|null = null
    let right:ListNode|null = null
    let lHead:ListNode|null = left
    let rHead:ListNode|null = right

    let curr = head
    while(curr){
        const next = curr.next
        if(curr.val < x){
            if(!left){
                left = curr
                lHead = curr
            }else{
                left.next = curr
                left = curr
            }
        }
        if(curr.val >= x){
            if(!right){
                right = curr
                rHead = curr
            }else{
                right.next = curr
                right = curr
            }
        }

        // move current
        curr = next
    }
    // end right
    if (right) right.next = null
    // connect left to right
    if (left){
         left.next = rHead
         return lHead
    }

    // No nodes smaller than x
    return rHead;
};