// l-21 merge two sorted list

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
  head: node<T> | null = null;
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
    console.log(`size of list ${this.size}`);
  }
}

// merge
function mergeLL<T>(firstHead: node<T>, secondHead: node<T>) {
  //    create a new linked list

  const newLL = new LinkedList<T>();

  while (firstHead.next && secondHead.next) {
    if (firstHead.value <= secondHead.value) {
      newLL.InsertAtEnd(firstHead.value);
      firstHead = firstHead.next!;
    } else {
      newLL.InsertAtEnd(secondHead.value);
      secondHead = secondHead.next!;
    }
  }

  //   now merger remaining

  while (firstHead.next) {
    newLL.InsertAtEnd(firstHead.value);
    firstHead = firstHead.next;
  }

  //   now merger remaining

  while (secondHead.next) {
    newLL.InsertAtEnd(secondHead.value);
    secondHead = secondHead.next;
  }

  newLL.list();
}

const myLL = new LinkedList<number>();
myLL.InsertAtEnd(200);
myLL.InsertAtEnd(300);
myLL.InsertAtEnd(400);
myLL.InsertAtEnd(400);
const myLL2 = new LinkedList<number>();
myLL2.InsertAtEnd(100);
myLL2.InsertAtEnd(150);
myLL2.InsertAtEnd(250);
myLL2.InsertAtEnd(350);

mergeLL<number>(myLL.head!, myLL2.head!);
