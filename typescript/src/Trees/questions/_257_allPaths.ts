export {};

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function binaryTreePaths(root: TreeNode | null): string[] {
  let allPaths: string[] = [];

  function dfs(node: TreeNode | null, path: string) {
    // dead end
    if (!node) return null;

    // logic for not taking arrow for the root node
    let pathTillNow = path
      ? path + "->" + node.val.toString()
      : node.val.toString();

    // leaf node
    if (!node.left && !node.right) {
      // add to the output
      allPaths.push(pathTillNow);
    }

    // visit childs
    dfs(node.left, pathTillNow);
    dfs(node.right, pathTillNow);
  }

  dfs(root, "");

  return allPaths;
}
