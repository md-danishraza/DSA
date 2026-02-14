//  L-116 populating next right

// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

function nextRight(tree: number[]) {
  const ans: (string | number)[] = [];

  for (let i = 0; i < tree.length; i++) {
    // push the value
    ans.push(tree[i]);
    //only pushing the right value # if end of the level
    if (!checkRight(i, tree)) ans.push("#");
  }
  return ans;
}

function checkRight(i: number, tree: number[]) {
  // get parent
  const parent = (i - 1) / 2;
  // get right child
  const right = parent * 2 + 2;

  return tree[right] ? true : false;
}

const root = [1, 2, 3, 4, 5, 6, 7];

console.log(nextRight(root));
