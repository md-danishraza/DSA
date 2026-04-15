export {};

function heapSort(arr: number[]) {
  let n = arr.length;

  // build heap
  // heapify down from bottom to up
  for (let i = Math.floor(n / 2 - 1); i > -1; i--) {
    heapify(arr, n, i);
  }

  //   sorting
  // keep removing top element and balancing it
  // here instead of removing , replacing it with last one
  for (let i = n - 1; i > -1; i--) {
    // swapping it to zero index
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // balancing it
    // i as new size
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr: number[], n: number, i: number) {
  let largest = i;
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;

  // find largest child
  if (leftChild < n && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }
  if (rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  // if any of child is largest
  if (largest !== i) {
    // swap value of parent with largest
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    // heapify that child
    heapify(arr, n, largest);
  }
}

console.log(heapSort([7, 6, 5, 4, 3, 2, 1]));
