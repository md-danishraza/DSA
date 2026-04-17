export {};

// L - 297

// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  // preorder traversal
  let serialized: string = "";

  function dfs(root: TreeNode | null) {
    if (!root) {
      // add null
      serialized += "null,";
      // serialized = serialize+",null"
      return;
    }

    // add current
    serialized += `${root.val},`;

    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);

  //   pop last extra comma
  return serialized.slice(0, serialized.length - 1);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  // convert it into array of string
  let list = data.split(",");
  //   console.log(list);

  let index = 0; // Pointer to track position

  function construct(list: string[]): TreeNode | null {
    // // extracting current value
    // let currentVal = list.shift()!;
    // Read the value at the current index, then increment the pointer
    let currentVal = list[index++];

    // this case is definite for all recursion path
    if (currentVal == "null") return null;

    // create current node
    let currNode = new TreeNode(parseInt(currentVal));

    // recursion call
    currNode.left = construct(list);
    currNode.right = construct(list);

    return currNode;
  }

  return construct(list);
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.right.right = new TreeNode(9);
root.right.right.left = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

// console.log(serialize(root));

function preorder(root: TreeNode | null): void {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

let newRoot = deserialize(serialize(root));
preorder(newRoot);
