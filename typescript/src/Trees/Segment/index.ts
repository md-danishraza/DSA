class SegmentNode {
  data: number = 0;
  leftInterval: number;
  rightInterval: number;
  leftNode: SegmentNode | null = null;
  rightNode: SegmentNode | null = null;

  constructor(leftInterval: number, rightInterval: number) {
    this.leftInterval = leftInterval;
    this.rightInterval = rightInterval;
  }
}

class segmentTree {
  root: SegmentNode | null = null;

  // public method
  createTree(arr: number[]) {
    this.root = this.createTreeRecursive(arr, 0, arr.length - 1);
  }

  createTreeRecursive(arr: number[], start: number, end: number): SegmentNode {
    // leaf base case
    if (start == end) {
      const leaf = new SegmentNode(start, end);
      leaf.data = arr[start];
      return leaf;
    }

    // now creating new node at current level
    // value will be return from left and right node
    const mid = Math.floor((start + end) / 2);
    const currentNode = new SegmentNode(start, end);
    // first construct left and right subtree
    currentNode.leftNode = this.createTreeRecursive(arr, start, mid);
    currentNode.rightNode = this.createTreeRecursive(arr, mid + 1, end);

    // then add the value of currentnode
    currentNode.data =
      (currentNode.leftNode?.data || 0) + (currentNode.rightNode?.data || 0);
    return currentNode;
  }

  //   public query method
  query(qsi: number, qei: number) {
    return this.queryRecursive(this.root!, qsi, qei);
  }
  private queryRecursive(
    node: SegmentNode | null,
    qsi: number,
    qei: number
  ): number {
    if (!node || qsi > node.rightInterval || qei < node.leftInterval) {
      // No overlap
      return 0;
    }

    if (qsi <= node.leftInterval && qei >= node.rightInterval) {
      // Complete overlap
      return node.data;
    }

    // Partial overlap
    return (
      this.queryRecursive(node.leftNode, qsi, qei) +
      this.queryRecursive(node.rightNode, qsi, qei)
    );
  }

  // Update value at index
  update(index: number, newValue: number) {
    this.updateRecursive(this.root, index, newValue);
  }

  private updateRecursive(
    node: SegmentNode | null,
    index: number,
    newValue: number
  ): void {
    if (!node || index < node.leftInterval || index > node.rightInterval)
      return;
    // at leaf node update with new value
    if (node.leftInterval === node.rightInterval) {
      node.data = newValue;
      return;
    }

    this.updateRecursive(node.leftNode, index, newValue);
    this.updateRecursive(node.rightNode, index, newValue);
    node.data = (node.leftNode?.data || 0) + (node.rightNode?.data || 0);
  }

  // Display tree structure
  display() {
    this.displayRecursive(this.root, 0);
  }

  private displayRecursive(node: SegmentNode | null, depth: number) {
    if (!node) return;
    const indent = "  ".repeat(depth);
    console.log(
      `${indent}[${node.leftInterval}, ${node.rightInterval}] → ${node.data}`
    );
    this.displayRecursive(node.leftNode, depth + 1);
    this.displayRecursive(node.rightNode, depth + 1);
  }
}

const tree = new segmentTree();
tree.createTree([1, 3, 5, 7, 9, 11]);
tree.display();

console.log("Query [1, 3]:", tree.query(1, 3)); // Output: 15
tree.update(2, 10); // Update index 2 from 5 to 10
console.log("Query [1, 3] after update:", tree.query(1, 3)); // Output: 20
