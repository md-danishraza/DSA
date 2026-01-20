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

  // insert req without return type
  insertReq(value: T, index: number) {
    if (index >= this.size) {
      console.log("index out of bound");
      return;
    }
    // call the recursion fn
    this.recursiveCall(this.head, index, value);
  }
  private recursiveCall(
    head: node<T> | null,
    index: number,
    value: T,
    currentIndex: number = 0
  ) {
    if (!head) {
      return;
    }
    // reached at index
    if (index == currentIndex + 1) {
      const newNode = new node<T>(value);
      const temp = head.next;
      head.next = newNode;
      newNode.next = temp;

      // update the size
      this.size += 1;
    } else {
      this.recursiveCall(head.next, index, value, currentIndex + 1);
    }
  }

  // with return type
  insertRecReturn(value: T, index: number) {
    if (index < 0 || index > this.size) {
      console.log("index out of bound");
      return;
    }
    if (this.head) {
      this.head = this.insertRecReturnCall(this.head, value, index);
    }
  }

  private insertRecReturnCall(currNode: node<T>, value: T, index: number) {
    // index reached
    if (index === 0) {
      const newNode = new node<T>(value);
      newNode.next = currNode; // link to current node
      this.size++;
      if (newNode.next === null) {
        this.tail = newNode; // update tail if inserted at end
      }
      return newNode;
    }
    if (currNode.next) {
      currNode.next = this.insertRecReturnCall(currNode.next, value, index - 1);
    }
    if (currNode.next === null) {
      this.tail = currNode; // keeping tail updated
    }
    return currNode;
  }
}

const myLL = new LinkedList<number>();
myLL.InsertAtEnd(200);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(500);
// myLL.insertReq(450, 2);
// myLL.insertReq(350, 1);
// myLL.list();

myLL.insertRecReturn(5, 0);
myLL.insertRecReturn(25, 3);
myLL.insertRecReturn(40, 5);

myLL.list();
