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

  middleNode(head: node<T> = this.head!) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next!;
      fast = fast.next.next!;
    }

    console.log(`middle node is ${slow.value}`);
  }
}

const myLL = new LinkedList<number>();
myLL.InsertAtEnd(200);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(500);
myLL.InsertAtEnd(600);
myLL.InsertAtEnd(700);
myLL.list();
myLL.middleNode();
