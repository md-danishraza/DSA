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

  //   reverese LL using recursion
  reverseRec(currNode: node<T> = this.head!): node<T> {
    // if its the last node
    // mark it as head
    if (!currNode.next) {
      this.head = currNode;
      return currNode;
    }
    // get the reversed node
    const reverseNode = this.reverseRec(currNode.next);

    // connect to current node
    reverseNode.next = currNode;
    // break connection
    currNode.next = null;
    // mark tail
    this.tail = currNode;
    // return currnode
    return currNode;
  }

  reverse(): void {
    let prev: node<T> | null = null;
    let curr: node<T> | null = this.head;
    this.tail = this.head; // original head becomes new tail

    while (curr) {
      const next = curr.next; // save next
      curr.next = prev; // reverse pointer
      prev = curr; // move prev forward
      curr = next; // move curr forward
    }

    this.head = prev; // new head
  }
}

const myLL = new LinkedList<number>();
myLL.InsertAtEnd(200);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(500);
myLL.list();
// myLL.reverseRec();
myLL.reverse();
myLL.list();
