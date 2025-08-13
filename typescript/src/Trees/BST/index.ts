class BstNode {
  value: number;
  left: BstNode | null = null;
  right: BstNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class BST {
  root: BstNode | null = null;

  // Public insert method
  insert(value: number): void {
    if (!this.root) {
      this.root = new BstNode(value);
    } else {
      this._insertRecursive(this.root, value);
    }
  }

  private _insertRecursive(current: BstNode, value: number): void {
    if (value < current.value) {
      if (!current.left) {
        current.left = new BstNode(value);
      } else {
        this._insertRecursive(current.left, value);
      }
    } else if (value > current.value) {
      if (!current.right) {
        current.right = new BstNode(value);
      } else {
        this._insertRecursive(current.right, value);
      }
    }
    // If value == current.value, do nothing (no duplicates)
  }

  // Public search method
  search(value: number): BstNode | null {
    return this._searchRecursive(this.root, value);
  }

  private _searchRecursive(
    current: BstNode | null,
    value: number
  ): BstNode | null {
    if (!current) return null;
    if (current.value === value) return current;

    if (value < current.value) {
      return this._searchRecursive(current.left, value);
    } else {
      return this._searchRecursive(current.right, value);
    }
  }
}
