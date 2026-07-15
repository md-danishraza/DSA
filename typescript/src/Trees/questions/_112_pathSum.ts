export {};

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // base case
  //   dead end but not leaf node
  //   prevent base case if tree is empty
  if (!root) return false;

  let remainingSum = targetSum - root.val;

  //  if no left and right child then its the leaf node
  if (!root.left && !root.right) {
    return remainingSum === 0;
  }

  // return any of true path
  return (
    hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
  );
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);

root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);

console.log(hasPathSum(root, 0));
