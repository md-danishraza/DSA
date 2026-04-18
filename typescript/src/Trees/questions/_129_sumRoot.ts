// L - 129

// you are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

export {};

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function sumNumbers(root: TreeNode | null): number {
  function calSum(root: TreeNode | null, digit: string): number {
    // dead end or empty tree
    // on below leaf node , null
    // by doing this we prevent double summation
    if (!root) {
      return 0;
    }

    // add digit
    let digitTillNow = digit + root.val.toString();

    // leaf node
    if (!root?.left && !root?.right) {
      // extract digit
      return parseInt(digitTillNow);
    }

    return calSum(root.left, digitTillNow) + calSum(root.right, digitTillNow);
  }

  return calSum(root, "");
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(sumNumbers(root));
