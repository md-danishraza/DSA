// flatten to linked list
// right skewed

export {};

class node {
  val: number;
  left: node | null = null;
  right: node | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function flatten(root: node | null): void {
  let ansArr: number[] = [];
  function dfsPreorder(root: node | null) {
    if (!root) return root;
    ansArr.push(root.val);
    dfsPreorder(root.left);
    dfsPreorder(root.right);
  }

  dfsPreorder(root);

  let newRoot = new node(ansArr.shift()!);

  let current = newRoot;

  while (ansArr.length) {
    let newVal = new node(ansArr.shift()!);

    current.right = newVal;

    // update current root
    current = current.right;
  }

  //   print linked list
  console.log(newRoot.val);
  while (newRoot.right) {
    newRoot = newRoot.right;
    console.log(newRoot.val);
  }
}

function flatten2(root: node | null): node | null {
  let current = root;

  while (current) {
    // if left tree exist
    if (current.left) {
      // first rightmost in left subtree
      let runner = current.left;

      while (runner.right) {
        runner = runner.right;
      }

      // assing entire right tree to this righmost
      runner.right = current.right;

      // nullify current left
      current.right = current.left;
      current.left = null;
    }
    // move to next right
    current = current.right;
  }

  // print linked list
  let printRunner: node | null = root;
  while (printRunner) {
    console.log(printRunner.val);
    printRunner = printRunner.right;
  }

  return root;
}

const root = new node(1);
root.left = new node(2);
root.right = new node(5);
root.left.left = new node(3);
root.left.right = new node(4);
root.right.right = new node(6);

// flatten(root);
flatten2(root);
