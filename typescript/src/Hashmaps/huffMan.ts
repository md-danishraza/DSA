export {};

class Node {
  data: string;
  cost: number;
  left: Node | null = null;
  right: Node | null = null;

  constructor(data: string, cost: number) {
    this.data = data;
    this.cost = cost;
  }
}

class huffMan {
  // to preserve leading zeroes we are using string for binary
  private encoder: Map<string, string> = new Map();
  private decoder: Map<string, string> = new Map();

  // auto build tree when we create class
  constructor(feeder: string) {
    this.huffmanEncoder(feeder);
  }

  //   feeder method
  private huffmanEncoder(feeder: string) {
    // 1. create frequency map
    const freqMap: Map<string, number> = new Map();

    for (let char of feeder) {
      freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // 2. create min heap out freqMap
    let minHeap = new MinHeap();
    for (let [char, freq] of freqMap.entries()) {
      minHeap.push(new Node(char, freq));
    }
    // Edge case: If the feeder string only has 1 unique character (e.g. "aaaa")
    if (minHeap.size === 1) {
      let singleNode = minHeap.pop()!;
      this.encoder.set(singleNode.data, "0");
      this.decoder.set("0", singleNode.data);
      return;
    }

    // 3. remove 2 elements from heap and combine
    // till only single node left
    while (minHeap.size > 1) {
      let first = minHeap.pop()!;
      let second = minHeap.pop()!;

      // Create an internal merged node. Data doesn't matter (we use empty string)
      let combinedNode = new Node("", first.cost + second.cost);
      combinedNode.left = first;
      combinedNode.right = second;

      // Push it back into the heap
      minHeap.push(combinedNode);
    }

    // 4. get that root node
    let root = minHeap.pop()!;

    // 5. create encoder/decoder maps
    this.initEncoderDecoder(root, "");
  }

  //   osf = output so far
  private initEncoderDecoder(root: Node, osf: string) {
    // if leaf node
    if (!root.left && !root.right) {
      // add to hashmaps
      this.encoder.set(root.data, osf);
      this.decoder.set(osf, root.data);
      return;
    }

    // left 0
    this.initEncoderDecoder(root.left!, osf.concat("0"));
    // right 1
    this.initEncoderDecoder(root.right!, osf.concat("1"));
  }

  //   public
  encode(source: string): string {
    let encodedString = "";
    for (let char of source) {
      encodedString += this.encoder.get(char);
    }
    return encodedString;
  }

  decode(encodedString: string): string {
    let decodedString = "";
    let currentBits = "";

    // Read bit by bit. As soon as we find a match in the decoder, add the char
    // This works because Huffman codes are "Prefix-Free" (no code is a prefix of another)
    for (let bit of encodedString) {
      currentBits += bit;
      if (this.decoder.has(currentBits)) {
        decodedString += this.decoder.get(currentBits);
        currentBits = ""; // Reset for the next character
      }
    }
    return decodedString;
  }
}

class MinHeap {
  private heap: Node[] = [];

  get size() {
    return this.heap.length;
  }

  push(node: Node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): Node | null {
    if (this.size === 0) return null;
    if (this.size === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);
    return min;
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].cost >= this.heap[parentIndex].cost) break;

      // Swap
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  private bubbleDown(index: number) {
    const length = this.heap.length;
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let smallestIdx = index;

      if (
        leftChildIdx < length &&
        this.heap[leftChildIdx].cost < this.heap[smallestIdx].cost
      ) {
        smallestIdx = leftChildIdx;
      }
      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx].cost < this.heap[smallestIdx].cost
      ) {
        smallestIdx = rightChildIdx;
      }
      if (smallestIdx === index) break;

      // Swap
      [this.heap[index], this.heap[smallestIdx]] = [
        this.heap[smallestIdx],
        this.heap[index],
      ];
      index = smallestIdx;
    }
  }
}

const text = "ABBCCCDDDDEEEEE";
// Feeder string builds the tree
const huff = new huffMan(text);

const encoded = huff.encode(text);
console.log("Encoded String:", encoded);

const decoded = huff.decode(encoded);
console.log("Decoded String:", decoded);
