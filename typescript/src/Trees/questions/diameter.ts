// L-543
// Diameter of binary tree
export {};

class node {
  value: number;
  left: node | null = null;
  right: node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

function diameter(root: node | null) {
  // check height of left + right tree
  let diameter = 0;

  function dfs(_node: node | null): number {
    // if leaf node
    if (!_node) return 0;

    // add height
    let lh = dfs(_node.left);
    let rh = dfs(_node.right);

    // take height of current node + 1
    const curHeight = Math.max(lh, rh) + 1;

    // update diameter (longest path through this node)
    diameter = Math.max(lh + rh, diameter);

    return curHeight;
  }

  dfs(root);
  return diameter;
}

const root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);

console.log("Diameter:", diameter(root));
