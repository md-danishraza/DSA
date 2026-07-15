// L-993
//

export {};

class node {
  val: number;
  left: node | null = null;
  right: node | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function areCousins(root: node | null, x: number, y: number): boolean {
  if (!root) return false;

  const queue: node[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    // Flags
    let foundX = false;
    let foundY = false;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!;

      // 1. Did we find x or y?
      if (currentNode.val === x) foundX = true;
      if (currentNode.val === y) foundY = true;

      // 2. SIBLING CHECK: Are x and y children of the SAME parent?
      // If yes, they are siblings, NOT cousins.
      if (currentNode.left && currentNode.right) {
        if (
          (currentNode.left.val === x && currentNode.right.val === y) ||
          (currentNode.left.val === y && currentNode.right.val === x)
        ) {
          return false; // They share a parent!
        }
      }

      // 3. Queue up children for the next level
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // 4. LEVEL RESOLUTION
    // If we found both on this level, and they didn't trigger the sibling check, they are cousins!
    if (foundX && foundY) return true;

    // If we found only ONE of them on this level, they are at different depths. Not cousins.
    if (foundX || foundY) return false;
  }

  return false;
}

const root = new node(1);
root.left = new node(2);
root.right = new node(4);
root.left.left = new node(3);
root.left.right = new node(5);
root.right.left = new node(3);
root.right.right = new node(5);

console.log(areCousins(root, 3, 5));
console.log(areCousins(root, 5, 5));
