class node<T> {
  value: T;
  next: node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class singlyLL<T> {
  private head: node<T> | null = null;
  private tail: node<T> | null = null;
  private size: number = 0;

  InsertAtStart(value: T) {
    const newNode = new node<T>(value);
    // if first element
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    // not single first element
    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }
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
  InsertAtIndex(value: T, index: number) {
    const newNode = new node(value);
    if (this.size < index || index < 1) {
      console.log(`index should be between 1 and ${this.size}`);
      return;
    }
    let currentNode = this.head;
    let i = 1;
    while (i < index - 1 && currentNode) {
      currentNode = currentNode.next;
      i++;
    }
    // console.log(currentNode);
    if (currentNode) {
      const temp = currentNode.next;
      currentNode.next = newNode;
      newNode.next = temp;

      this.size++;
    }
  }
  DeleteAtStart() {
    if (!this.head) {
      console.log("list is empty!");
      return;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.size--;
      return;
    }
    // just remove the reference (value and next will change)
    this.head = this.head.next;
    this.size--;
  }
  DeleteAtIndex(index: number) {
    if (this.size < index || index < 1) {
      console.log(`index should be between 1 and ${this.size}`);
      return;
    }
    let currentNode = this.head;
    let i = 1;
    while (i < index - 1 && currentNode) {
      currentNode = currentNode.next;
      i++;
    }
    // one prev node
    if (currentNode?.next) {
      currentNode.next = currentNode.next.next;
    }
    this.size--;
  }
  DeleteAtEnd() {
    if (!this.head) {
      console.log("list is empty!");
      return;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.size--;
      return;
    }
    let secondLastNode = this.head;
    while (secondLastNode.next?.next) {
      secondLastNode = secondLastNode.next;
    }

    secondLastNode.next = null;
    this.tail = secondLastNode;
    this.size--;
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
  getSize(): number {
    return this.size;
  }
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

const myLL = new singlyLL<number>();
myLL.InsertAtStart(100);
myLL.InsertAtStart(400);
myLL.InsertAtEnd(200);
myLL.InsertAtEnd(300);
// myLL.list();
myLL.InsertAtIndex(500, 3);
myLL.list();
console.log("delete at end");
myLL.DeleteAtEnd();
myLL.list();
console.log("delete first");
myLL.DeleteAtStart();
myLL.list();
console.log("delete index");
myLL.DeleteAtIndex(2);
myLL.list();
console.log(myLL.getSize());
console.log(myLL.toArray());
