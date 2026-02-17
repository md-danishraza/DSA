export {};

class node {
  val: number;
  left: node | null = null;
  right: node | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function symmetric(root: node) {
  if (!root) return [];

  const queue: (node | null)[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const ans: (number | null)[] = [];
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!;
      if (currentNode) {
        ans.push(currentNode.val);
        queue.push(currentNode.left);
        queue.push(currentNode.right);
      } else {
        ans.push(null);
      }
    }

    // check symmetry in this level
    for (let i = 0; i < ans.length / 2; i++) {
      if (ans[i] !== ans[ans.length - i - 1]) {
        return false;
      }
    }
  }

  return true;
}

const root = new node(1);
root.left = new node(2);
root.right = new node(2);
root.left.left = new node(3);
root.left.right = new node(4);
root.right.left = new node(4);
root.right.right = new node(3);

console.log(symmetric(root));
