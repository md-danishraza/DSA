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

  rotateK(k: number) {
    // finding length and tail
    let length = 1;
    let tail = this.head;

    while (tail?.next) {
      tail = tail.next;
      length++;
    }

    // k should be less than L
    k = k % length;
    // k === L
    if (k == 0) return;

    // connect head and tail
    tail!.next = this.head;

    // now newtail will be at L-K-1
    let newTail = this.head!;
    for (let i = 0; i < length - k - 1; i++) {
      newTail = newTail.next!;
    }

    // breaking the ring
    this.head = newTail.next;
    newTail.next = null;
    this.tail = newTail;
  }
}

const myLL = new LinkedList<number>();
myLL.InsertAtEnd(200);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(500);
myLL.rotateK(2);
myLL.list();
