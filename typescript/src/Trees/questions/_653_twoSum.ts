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

function findTarget(root: TreeNode | null, k: number): boolean {
  let hashSet = new Set();

  let queue = [root];

  while (queue.length) {
    let node = queue.shift()!;

    let comp = k - node.val;

    if (hashSet.has(comp)) return true;

    hashSet.add(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return false;
}

function findTarget2(root: TreeNode | null, k: number): boolean {
  let hashSet = new Set<number>();

  return helper(root, k, hashSet);
}

function helper(
  node: TreeNode | null,
  k: number,
  hashSet: Set<number>
): boolean {
  if (!node) return false;

  if (hashSet.has(k - node.val)) return true;

  // add current node
  hashSet.add(node.val);
  return helper(node.left, k, hashSet) || helper(node.right, k, hashSet);
}
