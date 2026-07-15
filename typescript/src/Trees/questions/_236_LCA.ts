// lowest common ancestor

export {};

class node {
  val: number;
  left: node | null = null;
  right: node | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function LCA(root: node | null, p: number, q: number): node | null {
  if (!root) return null;

  if (root.val === p || root.val === q) {
    return root;
  }

  let leftNode = LCA(root.left, p, q);
  let rightNode = LCA(root.right, p, q);

  if (leftNode && rightNode) {
    return root;
  }

  return leftNode ? leftNode : rightNode;
}

const root = new node(1);
root.left = new node(2);
root.right = new node(5);
root.left.left = new node(3);
root.left.right = new node(4);
root.right.right = new node(6);

console.log(LCA(root, 5, 6));
