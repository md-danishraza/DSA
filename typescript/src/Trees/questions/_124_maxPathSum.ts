export {};

export {};

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function maxPathSum(root: TreeNode | null): number {
  // handling negative numbers
  let max = -Infinity;
  function dfs(root: TreeNode | null): number {
    if (!root) return 0;

    // not taking negative path, marking it as 0
    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right));

    // update max for current path
    max = Math.max(max, left + right + root.val);

    // return only optimal path sum from this parent
    return Math.max(left + root.val, right + root.val);
  }

  dfs(root);

  return max;
}
