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
      this.tail.next = this.head;
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

  hasLoop(head: node<T> | null = this.head): boolean {
    let slow = head;
    let fast = head;

    while (fast && fast.next && slow) {
      slow = slow.next!;
      fast = fast.next.next!;
      if (slow === fast) return true;
    }

    return false;
  }

  loopLength(head: node<T> | null = this.head): number {
    let slow = head;
    let fast = head;

    while (fast && fast.next && slow) {
      slow = slow.next!;
      fast = fast.next.next!;

      //   now calculate length by repeating the cycle again
      if (slow === fast) {
        let len = 1;
        let temp = slow.next;
        while (temp !== slow) {
          temp = temp!.next;
          len += 1;
        }
        return len;
      }
    }

    return 0;
  }
  loopBeginsFrom(head: node<T> | null = this.head): node<T> | null {
    let slow = head;
    let fast = head;

    while (fast && fast.next && slow) {
      slow = slow.next!;
      fast = fast.next.next!;

      if (slow === fast) {
        // Step 2: Reset one pointer to head
        slow = head;

        // Step 3: Move both one step at a time
        while (slow !== fast) {
          slow = slow!.next;
          fast = fast!.next;
        }

        // Step 4: Return the starting node of the loop
        return slow;
      }
    }

    return null;
  }
}

const myLL = new LinkedList<number>();
myLL.InsertAtEnd(200);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(500);
console.log(myLL.hasLoop());
console.log(myLL.loopLength());
console.log(myLL.loopBeginsFrom());
