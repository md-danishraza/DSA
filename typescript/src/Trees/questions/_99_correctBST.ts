export {};

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function recoverTree(root: TreeNode | null): void {
  let first: TreeNode | null = null;
  let second: TreeNode | null = null;
  let prev: TreeNode | null = null;

  function inOrder(root: TreeNode | null) {
    if (!root) return;

    // left
    inOrder(root.left);

    // find fault nodes
    if (prev && prev.val > root.val) {
      if (!first) {
        first = prev;
      } else {
        second = root;
        // no need to check further
        return;
      }
    }

    // move prev pointer
    prev = root;

    // right subtress
    inOrder(root.right);
  }

  inOrder(root);

  // swap values
  let temp = prev!.val;
  first!.val = second!.val;
  second!.val = temp;
}
