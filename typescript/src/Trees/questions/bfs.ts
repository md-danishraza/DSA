export {};

class node {
  value: number;
  left: node | null = null;
  right: node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

function bfs(root: node) {
  const queue = [root];

  while (queue.length > 0) {
    const popped = queue.shift();
    if (popped) {
      console.log(popped?.value);
    }
    // insert left and right node
    if (popped?.left) {
      queue.push(popped?.left);
    }
    if (popped?.right) {
      queue.push(popped?.right);
    }
  }
}

function levelOrderTraversal(root: node) {
  const result: number[][] = [];
  const queue: node[] = [root];

  while (queue.length) {
    // current level length
    const levelSize = queue.length;
    // current level ans
    const level: number[] = [];
    for (let i = 0; i < levelSize; i++) {
      // popleft
      const current = queue.shift();
      if (current) {
        level.push(current.value);

        // enque
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }

    // insert this level
    result.push(level);
  }

  console.log(result);
}

const root = new node(1);
root.left = new node(2);
root.right = new node(4);
root.left.left = new node(3);
root.left.right = new node(5);
root.left.left.left = new node(3);
root.left.left.right = new node(5);

bfs(root);
levelOrderTraversal(root);
// 1 , 2, 4, 3

function zigzagLevelOrder(root: node | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: node[] = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    const levelSize = queue.length;

    // Pre-allocate the array for this level to achieve O(1) insertions
    const currentLevel = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      // Standard BFS: Dequeue the front element
      const currentNode = queue.shift()!;

      // Determine where to place the value based on the current direction
      const insertIndex = leftToRight ? i : levelSize - 1 - i;
      currentLevel[insertIndex] = currentNode.value;

      // Enqueue children for the NEXT level (always left first, then right)
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // Add the finished level to our final result
    result.push(currentLevel);

    // Flip the direction for the next level
    leftToRight = !leftToRight;
  }

  return result;
}

console.log(zigzagLevelOrder(root));
