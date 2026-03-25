// l - 226

// inver a binary tree

// postorder
// swap left and right while backtracking

export {};

class node {
  value: number;
  left: node | null = null;
  right: node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

function invert(root: node) {
  console.log("before inversion");
  bfs(root);

  const newRoot = invert_rec(root);

  console.log("after inversion");
  bfs(newRoot);

  function bfs(root: node | null) {
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
}

function invert_rec(root: node | null) {
  // base case
  if (!root) return null;

  invert_rec(root?.left);
  invert_rec(root?.right);

  // swap
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
}

const root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);
root.right.left = new node(6);
root.right.right = new node(7);

invert(root);
