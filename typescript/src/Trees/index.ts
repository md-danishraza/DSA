class Gnode {
  value: number;
  left: Gnode | null = null;
  right: Gnode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class BTree {
  root: Gnode | null = null;

  // BFS insert left to right
  insert(value: number): void {
    const newNode = new Gnode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue: (Gnode | null)[] = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (current) {
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          queue.push(current.left);
        }

        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          queue.push(current.right);
        }
      }
    }
  }

  preOrder(node: Gnode | null = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  postOrder(node: Gnode | null = this.root) {
    if (node) {
      this.preOrder(node.left);
      this.preOrder(node.right);
      console.log(node.value);
    }
  }
  inOrder(node: Gnode | null = this.root) {
    if (node) {
      this.preOrder(node.left);
      console.log(node.value);
      this.preOrder(node.right);
    }
  }
}

const mytree = new BTree();
mytree.insert(10);
mytree.insert(20);
mytree.insert(30);
mytree.insert(40);
mytree.insert(50);
console.log("pre order");
mytree.preOrder();
console.log("post order");
mytree.postOrder();
console.log("in order");
mytree.inOrder();
