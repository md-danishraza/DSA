// l - 104
// find depth
// from root to farthest leaf node
export {};

class node {
  value: number;
  left: node | null = null;
  right: node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

function findDepth(root: node) {
  function dfs(_node: node | null): number {
    // base case
    if (!_node) return 0;

    const left: number = dfs(_node.left);
    const right: number = dfs(_node.right);

    return Math.max(left, right) + 1;
  }

  const depth = dfs(root);

  console.log(depth);
}

const root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);
root.right.left = new node(6);
root.right.right = new node(7);
root.left.left = new node(4);
root.left.left.left = new node(4);
root.left.left.left.left = new node(4);

root.left.right = new node(5);

findDepth(root);
