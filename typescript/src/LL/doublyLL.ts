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
  reverse() {
    let temp = this.head;

    while (temp) {
      // Swapping prev and next
      const next = temp.next;
      temp.next = temp.prev;
      temp.prev = next;

      // Move to next node (which was originally next)
      temp = next;
    }

    // Swap head and tail
    const oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
  }
  recursiveTraversal(node: DNode<T> | null = this.head) {
    if (node) {
      console.log(node.value);
      if (node.next == null) return;
      this.recursiveTraversal(node.next);
    }
  }

  hasLoop(head: DNode<T> | null = this.head): boolean {
    let slow = head;
    let fast = head;

    while (fast && fast.next && slow) {
      slow = slow.next!;
      fast = fast.next.next!;
      if (slow === fast) return true;
    }

    return false;
  }
}

const dll = new DoublyLinkedList();
dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtEnd(30);
dll.printForward();
dll.deleteAtStart();
dll.printBackward();
console.log("recursive traversal");
dll.recursiveTraversal();
dll.insertAtEnd(40);
dll.insertAtEnd(50);
dll.printForward();
console.log("reversing");
dll.reverse();
dll.printForward();
