export {}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}



function isPalindrome(head: ListNode | null): boolean {
    function findMiddle(head:ListNode){
    let slow = head
    let fast = head.next

    while(fast?.next && fast.next.next){
        slow = slow.next!
        fast = fast.next.next
    }
    // this will be middle
    return slow
}

function reverse(head:ListNode | null):ListNode | null{
    let prev: ListNode | null = null;
    let curr = head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev; // new head of the reversed part
}


    // Empty or single-node list 
    if (!head || !head.next) { return true }
    
    // first find the middle
    let mid = findMiddle(head)

    // reverse second half
    let secondHalfStart = reverse(mid.next!)

    // Compare pointers
    let p1:ListNode | null = head; // Start of list
    let p2:ListNode | null = secondHalfStart; // Start of reversed second half
    let isPalindrome = true;

    while (p2) {
      if (p1!.val !== p2.val) {
        isPalindrome = false;
        break;
      }
      p1 = p1!.next!;
      p2 = p2.next;
    }

    return isPalindrome
};