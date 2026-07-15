export {};

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  let queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    let levelSize = queue.length;
    // it can have null value
    let levelArr: (number | null)[] = [];

    // traverse the level , pop and add nodes
    for (let i = 0; i < levelSize; i++) {
      let current = queue.shift();
      if (current) {
        // add value to levelArr
        levelArr.push(current.val);

        // add childs even if they are null
        // to maintain perfect b-tree , handle missing value
        queue.push(current.left);
        queue.push(current.right);
      } else {
        // insert null
        levelArr.push(null);
      }
    }

    // now check to symmetry
    // null can be equal to null
    // only Nan is not equal itself
    for (let i = 0; i < Math.floor(levelArr.length / 2); i++) {
      // compare symmetric
      if (levelArr[i] !== levelArr[levelSize - 1 - i]) {
        return false;
      }
    }
  }

  return true;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));
