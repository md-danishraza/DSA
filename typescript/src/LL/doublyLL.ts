class DNode<T> {
  value: T;
  next: DNode<T> | null;
  prev: DNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  private head: DNode<T> | null = null;
  private tail: DNode<T> | null = null;
  private size = 0;

  insertAtStart(value: T) {
    const newNode = new DNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  insertAtEnd(value: T) {
    const newNode = new DNode(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  deleteAtStart() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
    }
    this.size--;
  }

  deleteAtEnd() {
    if (!this.tail) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
    }
    this.size--;
  }

  printForward() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  printBackward() {
    let curr = this.tail;
    while (curr) {
      console.log(curr.value);
      curr = curr.prev;
    }
  }
}
