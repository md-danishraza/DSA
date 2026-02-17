export {};
//  L-116 populating next right

// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// implemenation 1
// with On  - BFS

class node {
  val: number;
  left: node | null = null;
  right: node | null = null;
  next: node | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function connect1(root: node) {
  if (!root) return null;

  const queue: node[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!;

      // if its not the last node then attach its right
      if (i < levelSize - 1) {
        currentNode.next = queue[0];
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return root;
}

function print(root: node) {
  const leftMostQueue: node[] = [root];
  const ans: (number | string)[] = [];
  while (leftMostQueue.length) {
    let current = leftMostQueue.shift();
    if (current) ans.push(current.val);
    // add leftmost to queue
    if (current?.left) leftMostQueue.push(current?.left);

    // print
    while (current?.next) {
      ans.push(current.val);
      // console.log(current.val);
      current = current.next;
    }
    // level break
    ans.push("#");
  }
  console.log(ans);
}

const root = new node(1);
root.left = new node(2);
root.right = new node(4);
root.left.left = new node(3);
root.left.right = new node(5);
root.right.left = new node(3);
root.right.right = new node(5);

// console.log(connect1(root));
// print(root);

// method 2
// SC - O1
function connect2(root: node | null): node | null {
  if (!root) return null;

  // Start at the very top left node
  let leftmost = root;

  // We traverse down the left side of the tree.
  // We stop when leftmost.left is null (meaning we hit the bottom level).
  while (leftmost.left !== null) {
    // 'current' acts as our iterator across the horizontal level
    let current: node | null = leftmost;

    while (current !== null) {
      // 1. Connect the left child to the right child
      current.left!.next = current.right;

      // 2. Connect the right child to the next parent's left child
      if (current.next !== null) {
        current.right!.next = current.next.left;
      }

      // Move to the next node on this horizontal level
      current = current.next;
    }

    // Move down to the next horizontal level
    leftmost = leftmost.left;
  }

  //return the original root node
  return root;
}

// connect2(root);
// print(root);

// right most - L-199
// works well for perfect binary tree
function rightmost(root: node) {
  if (!root.right) {
    console.log(root.val);
    return;
  }
  let current = root;
  while (current) {
    console.log(current.val);
    // shift
    current = current.right!;
  }
}

rightmost(root);

// correct approach
function rightSideView(root: node | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const queue: node[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!;

      // If this is the last node in the current level, it's visible from the right!
      if (i === levelSize - 1) {
        result.push(currentNode.val);
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return result;
}
