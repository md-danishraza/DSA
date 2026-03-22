export {};

class node {
  value: number;
  left: node | null = null;
  right: node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

function dfs(root: node | null) {
  if (!root) {
    return null;
  } else {
    dfs(root.left);
    console.log(root.value);
    dfs(root.right);
  }
}

function preorder(root: node | null): void {
  if (!root) return;
  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
}

function postorder(root: node | null): void {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.value);
}

const root = new node(1);
root.left = new node(2);
root.right = new node(4);
root.left.left = new node(3);
root.left.right = new node(5);
root.left.left.left = new node(3);
root.left.left.right = new node(5);

dfs(root);
