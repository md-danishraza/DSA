class QNode<T> {
  value: T;
  next: QNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Queue<T> {
  private head: QNode<T> | null = null;
  private tail: QNode<T> | null = null;
  private _size: number = 0;

  enqueue(value: T): void {
    const newNode = new QNode(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this._size--;
    return value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  size(): number {
    return this._size;
  }
}

class CircularQueue {
  array: Array<number | null>;
  capacity: number;
  size: number;
  front: number = 0;
  rear: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.array = new Array(capacity).fill(null);
  }

  enqueue(value: number) {
    // if full
    if (this.size === this.capacity) {
      console.log("circular queue is full");
      return;
    }

    this.array[this.rear] = value;
    // handle the
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
  }

  dequeue() {
    // if empty
    if (!this.size) {
      console.log("circular queue is empty!!");
      return;
    }
    console.log(this.array[this.front]);
    // increase the front pointer
    this.front = (this.front + 1) % this.capacity;
    this.size--;
  }

  peek() {
    // if empty
    if (!this.size) {
      console.log("circular queue is empty!!");
      return;
    }
    console.log(this.array[this.front]);
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  print() {
    if (!this.size) {
      console.log("circular queue is empty!!");
      return;
    }
    // size tells valid length
    for (let i = 0; i < this.size; i++) {
      // start fron front + i
      const index = (this.front + i) % this.capacity;
      console.log(this.array[index]);
    }
  }
}

const Cque = new CircularQueue(5);

Cque.enqueue(10);
Cque.enqueue(20);
Cque.print();
Cque.dequeue();
console.log("after deque");
Cque.print();
