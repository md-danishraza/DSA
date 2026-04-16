//  l - 230

// given BST , return kth smallest element

export {};

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function kThSmallestElement(root: TreeNode, k: number) {
  let sortedArr: number[] = [];
  InOrder(root, sortedArr);

  return sortedArr[k - 1];
}

function InOrder(root: TreeNode, sortedArr: number[]): null {
  if (!root) return null;

  if (root.left) InOrder(root.left, sortedArr);
  // add value to ans
  sortedArr.push(root.val);
  if (root.right) InOrder(root.right, sortedArr);

  return null;
}

function kThSmallestElementOptimized(root: TreeNode, k: number) {
  let count = 0;
  let result = -1;

  function inOrder(root: TreeNode | null) {
    if (!root) return;

    inOrder(root.left);
    // if k == count
    // increase count for this node
    count++;
    if (count === k) {
      // no need to check further
      result = root.val;
      return;
    }
    inOrder(root.right);
  }

  inOrder(root);

  return result;
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.right.right = new TreeNode(9);
root.right.right.left = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

root.left.left.left = new TreeNode(1);

// console.log(kThSmallestElement(root, 3));
console.log(kThSmallestElementOptimized(root, 3));
