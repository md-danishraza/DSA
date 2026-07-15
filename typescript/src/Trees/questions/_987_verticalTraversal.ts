export {};

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function verticalTraversal(root: TreeNode | null): number[][] {
  if (!root) return [];
  // let map
  let keyMap = new Map<number, number[]>();

  let queue: { Tnode: TreeNode; col: number }[] = [{ Tnode: root!, col: 0 }];

  let minKey = Infinity;
  let maxKey = -Infinity;

  while (queue.length) {
    let levelSize = queue.length;

    // Temporary map for current node
    // maintaining sort order
    let levelMap = new Map<number, number[]>();

    for (let i = 0; i < levelSize; i++) {
      let { Tnode, col } = queue.shift()!;

      minKey = Math.min(minKey, col);
      maxKey = Math.max(maxKey, col);

      // Add nodes to the temporary row map
      if (!levelMap.has(col)) {
        levelMap.set(col, []);
      }
      levelMap.get(col)!.push(Tnode.val);

      // Push children for the next row
      if (Tnode.left) queue.push({ Tnode: Tnode.left, col: col - 1 });
      if (Tnode.right) queue.push({ Tnode: Tnode.right, col: col + 1 });
    }

    // The level is over. Sort overlapping nodes and add to the main map!
    for (let [col, values] of levelMap.entries()) {
      // Sort ascending
      values.sort((a, b) => a - b);

      //   add to gloab map
      if (!keyMap.has(col)) {
        keyMap.set(col, []);
      }
      // Append the perfectly sorted chunk to the bottom of the main column
      keyMap.get(col)!.push(...values);
    }
  }

  // create output arr
  let output: number[][] = [];
  for (let i = minKey; i <= maxKey; i++) {
    if (keyMap.has(i)) {
      output.push(keyMap.get(i)!);
    }
  }

  return output;
}
