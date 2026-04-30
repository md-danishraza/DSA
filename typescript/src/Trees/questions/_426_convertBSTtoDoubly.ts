export {};

// convert bst to doubly linked list

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

class DLNode {
  val: number;
  prev: DLNode | null;
  next: DLNode | null;

  constructor(val?: number, prev?: DLNode | null, next?: DLNode | null) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}

function convert(root: TreeNode) {
  if (!root) return;

  let head: DLNode | null = null;
  let tail: DLNode | null = null;

  function helper(root: TreeNode | null) {
    if (!root) return;

    helper(root.left);

    let newNode = new DLNode(root.val);

    if (!head) {
      head = newNode;
    } else {
      tail!.next = newNode;
      newNode.prev = tail;
    }
    // moving the tail
    tail = newNode;

    helper(root.right);
  }
  helper(root);

  //   connecting head and tail
  tail!.next = head;
  head!.prev = tail;

  return head;
}

let root = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(6, new TreeNode(5), new TreeNode(7));

console.log("Starting conversion...\n");

let listHead = convert(root);

printCircularList(listHead!);

function printCircularList(listHead: DLNode | null) {
  if (!listHead) return;

  let current: DLNode | null = listHead;
  console.log(current.val);
  current = current.next;
  while (current && current != listHead) {
    console.log(current.val);
    current = current.next;
  }
}
