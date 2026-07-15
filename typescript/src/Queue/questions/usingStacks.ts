// queue using stacks
export {};
class QueueUsingStacks<T> {
  private stack1: [T];
  private stack2: [T];
  private size: number;

  //   initializing it
  constructor() {
    this.stack1 = [] as any;
    this.stack2 = [] as any;
    this.size = 0;
  }

  enqueue(value: T) {
    // push to first stack
    this.stack1.push(value);
    this.size += 1;
  }
  dequeue() {
    // remove and add to stack2
    if (!this.size) {
      console.log("stack is empty");
    }
    // if stack2 is empty then only transer it
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()!);
      }
    }
    // remove from stack2
    this.size -= 1;
    return this.stack2.pop();
  }

  peek(): T | undefined {
    //    if stack2 is empty
    if (!this.size) {
      console.log("stack is empty");
    }
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()!);
      }
      //   now return the last element
      return this.stack2[this.stack2.length - 1];
    }
  }

  isEmpty(): boolean {
    if (!this.size) return true;
    else return false;
  }

  queueSize(): number {
    return this.size;
  }
}

// Usage
const q = new QueueUsingStacks<number>();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.peek()); // 1
console.log(q.dequeue()); // 1
console.log(q.dequeue()); // 2
q.enqueue(4);
console.log(q.dequeue()); // 3
console.log(q.dequeue()); // 4
