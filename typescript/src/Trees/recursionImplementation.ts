// sample
import * as readline from "node:readline";

// ----------------- Gnode class -----------------
class Gnode {
  value: number;
  left: Gnode | null = null;
  right: Gnode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

// ----------------- BTree class -----------------
class BTree {
  root: Gnode;

  constructor(rootValue: number) {
    this.root = new Gnode(rootValue);
  }

  async populate() {
    await this.populateNode(this.root);
  }

  private async populateNode(node: Gnode) {
    const addLeft = await askQuestion(
      `Do you want to add left of ${node.value}? (y/n): `
    );
    if (addLeft.trim().toLowerCase() === "y") {
      const leftValue = parseInt(
        await askQuestion(`Enter left value of ${node.value}: `)
      );
      node.left = new Gnode(leftValue);
      await this.populateNode(node.left);
    }

    const addRight = await askQuestion(
      `Do you want to add right of ${node.value}? (y/n): `
    );
    if (addRight.trim().toLowerCase() === "y") {
      const rightValue = parseInt(
        await askQuestion(`Enter right value of ${node.value}: `)
      );
      node.right = new Gnode(rightValue);
      await this.populateNode(node.right);
    }
  }

  // Simple inorder traversal to test tree
  inorder(node: Gnode | null = this.root) {
    if (!node) return;
    this.inorder(node.left);
    process.stdout.write(node.value + " ");
    this.inorder(node.right);
  }
}

// ----------------- Readline Helper -----------------
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

// ----------------- Program Entry -----------------
(async () => {
  const rootValue = parseInt(await askQuestion("Enter root value: "));
  const tree = new BTree(rootValue);

  await tree.populate();

  console.log("\nInorder Traversal:");
  tree.inorder();
  console.log("\nDone!");

  rl.close();
})();
