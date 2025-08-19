class AVLNode {
  value: number;
  left: AVLNode | null = null;
  right: AVLNode | null = null;
  // default height of leaf node
  height: number = 0;

  constructor(value: number) {
    this.value = value;
  }
}

class AVLTree {
  root: AVLNode | null = null;

  private compare(a: number, b: number) {
    // b = node.value
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  // if node than return height
  private height(node: AVLNode | null): number {
    return node ? node.height : 0;
  }
  // update height = max height from either subtree+1
  private updateHeight(node: AVLNode): void {
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }
  //   height diff -1,0,1
  private getBalance(node: AVLNode | null): number {
    if (!node) return 0;
    return this.height(node.left) - this.height(node.right);
  }

  //   insertion wrapper for recursion = handle root
  insert(value: number) {
    this.root = this.insert_recursive(this.root, value);
  }
  // Node return is required as each insertion do reassignment of all node from bottom to up in a tree (reverse in a call stack)
  insert_recursive(node: AVLNode | null, value: number): AVLNode {
    // if not root then return new node that will become root
    // also base case for adding new node
    if (!node) return new AVLNode(value);

    // compare value and insert node either left or right
    const comp = this.compare(value, node.value);
    // -1 = add left side
    if (comp < 0) node.left = this.insert_recursive(node.left, value);
    // 1 = add right side
    if (comp > 0) node.right = this.insert_recursive(node.right, value);
    // duplicate - no operation
    else return node;

    //keep updating height of each node
    this.updateHeight(node);

    // now balancing up the tree starting from currently inserted node
    const balance = this.getBalance(node);

    // 4 cases
    /// Left Left - one right rotation
    if (balance > 1 && value < node.left!.value) {
      return this.rightRotate(node);
    }

    // Right Right - one left rotation
    if (balance < -1 && value > node.right!.value) {
      return this.leftRotate(node);
    }

    // Left Right - left rotate child and then right rotate parent
    if (balance > 1 && value > node.left!.value) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    // Right Left - right rotate child and then left rotate parent
    if (balance < -1 && value < node.right!.value) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node;
  }

  private rightRotate(P: AVLNode) {
    // c.right = p
    // p.left = t3
    const c = P.left!;
    const t2 = c.right;

    // rotation
    c.right = P;
    P.left = t2 ?? null;

    // update heights (bottom-up)
    this.updateHeight(P);
    this.updateHeight(c);

    return c;
  }
  private leftRotate(P: AVLNode) {
    // p.right = c.left
    // c.left = p
    const c = P.right!;
    const t2 = c.left;

    // rotation
    c.left = P;
    P.right = t2 ?? null;

    // update heights (bottom-up)
    this.updateHeight(P);
    this.updateHeight(c);

    return c;
  }

  inOrder(node: AVLNode | null = this.root, arr: number[] = []): number[] {
    if (node) {
      this.inOrder(node.left, arr);
      arr.push(node.value);
      this.inOrder(node.right, arr);
    }
    return arr;
  }
  // Public search method
  search(value: number): BstNode | null {
    return this._searchRecursive(this.root, value);
  }

  private _searchRecursive(
    current: AVLNode | null,
    value: number
  ): AVLNode | null {
    if (!current) return null;
    if (current.value === value) return current;

    if (value < current.value) {
      return this._searchRecursive(current.left, value);
    } else {
      return this._searchRecursive(current.right, value);
    }
  }
}

const myAvl = new AVLTree();
myAvl.insert(20);
myAvl.insert(15);
myAvl.insert(10);
myAvl.insert(5);
console.log(myAvl.inOrder());
console.log(myAvl.search(20));
console.log("height will always be logn");

for (let i = 0; i < 1000; i++) {
  myAvl.insert(i);
}
console.log(myAvl.root?.height);
// 10
