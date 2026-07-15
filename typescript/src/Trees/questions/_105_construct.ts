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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  // hashMap of inorder to get index in constant
  let inorderMap = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  // pointer to track current root, instead of popping
  let postIndex = postorder.length - 1;

  function buildRec(s: number, e: number): TreeNode | null {
    if (s > e) return null;

    // get current root
    let root = postorder[postIndex];
    postIndex--;

    // create new root node
    let rootNode = new TreeNode(root);

    // finding the index in inorder to split
    let splitIndex = inorderMap.get(root)!;

    // Right subtree first
    rootNode.right = buildRec(splitIndex + 1, e);

    // Left subtree second
    rootNode.left = buildRec(s, splitIndex - 1);

    return rootNode;
  }

  return buildRec(0, inorder.length - 1);
}

// function findIndex(inOrder: number[], root: number) {
//   for (let i = 0; i < inOrder.length; i++) {
//     if (inOrder[i] === root) {
//       return i;
//     }
//   }
// }
