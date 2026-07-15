// l-143 - reorder a LL

export {};

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

  private reverseSubList(head: node<T> | null): node<T> | null {
    let prev: node<T> | null = null;
    let curr = head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev; // new head of the reversed part
  }
  middleNode(head: node<T> = this.head!) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next!;
      fast = fast.next.next!;
    }

    console.log(`middle node is ${slow.value}`);
    return slow;
  }

  reOrder() {
    // Edge case
    if (!this.head || !this.head.next) return;

    // middle
    const mid = this.middleNode(this.head);

    // Cut the list into two halves
    let secondHalfHead = mid.next;
    mid.next = null;

    secondHalfHead = this.reverseSubList(secondHalfHead);

    //    merge
    let first = this.head;
    let second = secondHalfHead;

    while (second) {
      // Save the next pointers before we break them
      const temp1 = first.next;
      const temp2 = second.next;

      // Rewire: first -> second
      first.next = second;
      // Rewire: second -> (original) next of first
      second.next = temp1;

      // Move forward
      first = temp1!;
      second = temp2;
    }
  }
}

const myLL = new LinkedList<number>();
myLL.InsertAtEnd(200);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(500);
myLL.reOrder();
myLL.list();
