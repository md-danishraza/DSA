console.log("stack");
// stack implementation using array

class stack<T> {
  array: T[] = [];
  size: number = 0;

  push(value: T) {
    this.array.push(value);
    this.size++;
  }

  pop() {
    if (!this.size) {
      console.log("stack empty");
      return;
    }
    this.array.pop();
    this.size--;
  }

  peek() {
    if (!this.size) {
      console.log("stack empty");
      return;
    }
    return this.array[this.array.length - 1];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

class Snode<T> {
  value: T | null = null;
  next: Snode<T> | null = null;
  prev: Snode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class StackError extends Error {
  message: string;

  constructor(message: string) {
    super();
    this.message = message;
  }
}

class Lstack<T> {
  head: Snode<T> | null = null;
  size: number = 0;

  push(value: T) {
    const newNode = new Snode<T>(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      // point head to new node
      this.head = newNode;
    }
    this.size++;
  }
  pop() {
    if (!this.head) {
      throw new StackError("stack underflow!!");
    }

    console.log(this.head?.value);
    const temp = this.head;
    this.head = temp?.next;
    temp.next = null;
    if (this.head) {
      this.head.prev = null;
    }
    this.size--;
  }

  peek() {
    if (!this.head) {
      console.log("stack is empty!!");
      return;
    }
    console.log(this.head.value);
  }
}

const myStack = new Lstack<number>();
myStack.push(10);
myStack.push(100);
myStack.push(200);
myStack.pop();
myStack.peek();
myStack.pop();
myStack.pop();
// myStack.pop();
