// console.log("heaps");

export class MaxHeap {
  arr: number[] = [];

  private swap(i: number, j: number) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }
  
  // property instead of method
  get size(): number {
    return this.arr.length;
  }

  private parent(i: number) {
    return Math.floor((i - 1) / 2);
  }
  private rightChild(i: number) {
    return i * 2 + 2;
  }
  private leftChild(i: number) {
    return i * 2 + 1;
  }

  insert(value: number) {
    // add at last index
    this.arr.push(value);
    this.insert_recurive(this.arr.length - 1);
    // console.log(`new root :- ${this.arr[0]}`);
  }
  //   upHeap
  private insert_recurive(index: number) {
    // base case
    if (index == 0) {
      return;
    }
    // if value is greater than parent than swap
    const parent = this.parent(index);
    if (this.arr[parent] < this.arr[index]) {
      this.swap(index, parent);
      // recall with parent
      this.insert_recurive(parent);
    }
  }

  remove() {
    if (!this.arr.length) {
      // console.log("heap is empty!!");
      return;
    }
    // remove root and replace it with last
    const removed = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    // now balance it from root
    // check for only 1 element that will be removed earlier
    if (this.arr.length) {
      this.remove_balance(0);
    }
    // console.log(`removed element :- ${removed}`);
    // console.log(`new root :- ${this.arr[0]}`);

    return removed
  }

    removeValue(value: number) {
      const index = this.arr.indexOf(value);

      if (index === -1) {
          return;
      }

      // remove last and replace with current index
      const last = this.arr.pop()!;

      // Removing the last element
      if (index === this.arr.length) {
          return;
      }

      this.arr[index] = last;

      // It might need to move up OR down
      const parent = this.parent(index);

      // heapify up (if parent vlue is smaller)
      if (index > 0 && this.arr[index] > this.arr[parent]) {
          this.insert_recurive(index);
      } else {
        // heapify down
          this.remove_balance(index);
      }
  }

  //   downHeap
  private remove_balance(index: number) {
    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);
    // find largest child
    let largest = index;

    if (
      leftIndex < this.arr.length &&
      this.arr[leftIndex] > this.arr[largest]
    ) {
      largest = leftIndex;
    }

    if (
      rightIndex < this.arr.length &&
      this.arr[rightIndex] > this.arr[largest]
    ) {
      largest = rightIndex;
    }

    // recurive only for larger path
    if (largest !== index) {
      this.swap(index, largest);
      this.remove_balance(largest);
    }
  }
  // heap sort
  heapSort() {
    if (!this.arr.length) {
      // console.log("heap is empty!!");
      return;
    }

    //   remove root till its empty
    const sorted: number[] = [];
    this.heapSort_recursive(sorted);
    // console.log(sorted);
  }
  private heapSort_recursive(sorted: number[]) {
    if (!this.arr.length) {
      return;
    }
    const popped = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    if (popped) sorted.push(popped);
    // rebalance
    this.remove_balance(0);
    this.heapSort_recursive(sorted);
  }

  peek(): number | undefined {
    return this.arr[0];
}
}

const mHeap = new MaxHeap();

mHeap.insert(7);
mHeap.insert(8);
mHeap.insert(9);
mHeap.insert(10);
mHeap.insert(11);
mHeap.insert(12);
mHeap.insert(13);
mHeap.insert(14);
mHeap.insert(5);
mHeap.remove();
mHeap.heapSort();
