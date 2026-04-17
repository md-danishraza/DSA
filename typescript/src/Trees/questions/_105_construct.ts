// 105
// Given two integer arrays preorder and inorder where preorder is the preorder
// traversal of a binary tree and inorder is the inorder traversal of
// the same tree, construct and return the binary tree.

export {};

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // base case
  if (!inorder.length) return null;

  // pop from preOrder
  let currentRoot = preorder.shift()!;

  // find index in inorder
  //   let rootIndex: number = findIndex(inorder, currentRoot)!;
  let rootIndex: number = inorder.indexOf(currentRoot);

  // then partition
  let leftSubtree = inorder.slice(0, rootIndex);
  let rightSubtree = inorder.slice(rootIndex + 1, inorder.length);

  // create root node
  let rootNode = new TreeNode(currentRoot);

  // recursively create trees
  //   preorder , left subtree should be created first
  rootNode.left = buildTree(preorder, leftSubtree);
  rootNode.right = buildTree(preorder, rightSubtree);

  return rootNode;
}

// function findIndex(inOrder: number[], root: number) {
//   for (let i = 0; i < inOrder.length; i++) {
//     if (inOrder[i] === root) {
//       return i;
//     }
//   }
// }
