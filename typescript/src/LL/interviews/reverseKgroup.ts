export {};
// leetcode - 25

// node with value and next
class node<T> {
  value: T;
  next: node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  // class attributes
  private head: node<T> | null = null;
  private tail: node<T> | null = null;
  private size: number = 0;

  InsertAtEnd(value: T) {
    if (!this.head) {
      const newNode = new node<T>(value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new node<T>(value);
      if (this.tail) {
        this.tail.next = newNode;
      }
      // move tail
      this.tail = newNode;
    }
    this.size++;
  }

  list() {
    if (!this.head) {
      console.log("list is empty!!");
    } else {
      let currentNode = this.head;
      // print first
      console.log(currentNode.value);
      while (currentNode.next) {
        currentNode = currentNode.next;
        console.log(currentNode.value);
      }
    }
  }

  reverseKGroup(k: number): void {
    if (!this.head || k <= 1) return;

    // 1. Create a dummy node.
    // Why? Because the head of the list will change (the k-th node becomes the new head).
    // Dummy helps us handle that edge case effortlessly.
    const dummy = new node<T>(0 as any);
    dummy.next = this.head;

    let groupPrev = dummy; // The node right BEFORE the group we are reversing

    while (true) {
      // 2. Find the k-th node (the end of our current group)
      let kTh = this.getKthNode(groupPrev, k);

      // If we don't have k nodes left, we are done!
      if (!kTh) break;

      const groupNext = kTh.next; // The start of the NEXT group

      // 3. Reverse the group
      // We need to reverse the list starting from 'groupPrev.next' up to 'groupNext'
      // Previous:  groupPrev -> [1 -> 2 -> 3] -> groupNext
      // After:     groupPrev -> [3 -> 2 -> 1] -> groupNext

      const prevGroupStart = groupPrev.next; // This will become the END of the group (node 1)
      this.reverseSegment(groupPrev.next, groupNext);

      // 4. Re-connect the edges
      groupPrev.next = kTh; // Connect 0 -> 3
      prevGroupStart!.next = groupNext; // Connect 1 -> 4

      // 5. Move groupPrev forward
      // Our new "previous" is the end of the list we just processed (node 1)
      groupPrev = prevGroupStart!;
    }

    // Update the real head of the class
    this.head = dummy.next;
  }

  // Helper: Find the k-th node starting from a node
  private getKthNode(curr: node<T> | null, k: number): node<T> | null {
    while (curr && k > 0) {
      curr = curr.next;
      k--;
    }
    return curr;
  }

  // Helper: Reverse a specific segment until we hit a specific 'stop' node
  private reverseSegment(start: node<T> | null, end: node<T> | null): void {
    let prev = null;
    let curr = start;

    // Standard reverse logic, but we stop when curr hits 'end'
    while (curr !== end) {
      const next = curr!.next;
      curr!.next = prev;
      prev = curr;
      curr = next;
    }
  }
}
