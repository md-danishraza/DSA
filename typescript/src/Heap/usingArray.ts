// creating max heap from unsorted array
// for complete binary tree
// no. of internal nodes = n/2
// no. of leaf nodes = n- (n/2)

class Mheap {
  arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
    // creating heap when initialized
    this.createHeap();
  }

  private swap(i: number, j: number) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }

  private rightChild(i: number) {
    return i * 2 + 2;
  }
  private leftChild(i: number) {
    return i * 2 + 1;
  }

  //   downheap from n/2 till 0
  createHeap() {
    const n = this.arr.length;
    if (!n) {
      console.log("heap is empty!!");
      return;
    }

    let start = Math.floor(n / 2);

    while (start >= 0) {
      this.downHeap(start);
      start--;
    }
  }

  //   downHeap
  private downHeap(index: number) {
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
      this.downHeap(largest);
    }
  }

  getRoot() {
    console.log(this.arr[0]);
  }
}

const unsortedArray = [50, 30, 23, 56, 232, 67, 23, 653, 343, 45];

const newHeap = new Mheap(unsortedArray);
newHeap.getRoot();
