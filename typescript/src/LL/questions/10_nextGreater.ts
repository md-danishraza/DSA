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

// l - 1019
function nextLargerNodes(head: ListNode | null): number[] {
    if(!head) return [];
   

    const vals: number[] = [];
    let curr: ListNode | null = head;
    while (curr) {
        vals.push(curr.val);
        curr = curr.next;
    }

    const n = vals.length;
    const ans: number[] = new Array(n).fill(0);
    // Monotonic decreasing stack (stores values)
    const stack: number[] = []; 

    // Traverse backwards
    for (let i = n - 1; i >= 0; i--) {
        // Pop any elements smaller than or equal to current
        while (stack.length > 0 && stack[stack.length - 1] <= vals[i]) {
            stack.pop();
        }

        // Top of stack is the next greater node
        if (stack.length > 0) {
            ans[i] = stack[stack.length - 1];
        }

        // Push current value as a potential candidate for elements to the left
        stack.push(vals[i]);
    }

    return ans;
 };