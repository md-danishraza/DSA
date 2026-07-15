// leetcode 51

function nQueen(n: number) {
  if (n < 4) {
    throw new Error("N should be greater than 4 for any solution");
  }
  // n*n zero matrix
  const mat: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  // call placeQueens
  const found = placeQueens(0, mat);

  if (found) {
    const ans: number[][] = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j]) {
          ans.push([i, j]);
        }
      }
    }
    console.log(ans);
  }
}

function placeQueens(col: number, mat: number[][]) {
  const n = mat.length;
  // base case
  if (col == n) {
    return true;
  }

  // for each col check all corresponding rows one by one
  for (let row = 0; row < n; row++) {
    if (safeCheck(row, col, mat)) {
      // than mark 1 this index
      mat[row][col] = 1;
      // call fn with next col
      if (placeQueens(col + 1, mat)) return true;
      // remove it for nex row loop checking
      mat[row][col] = 0;
    }
  }

  return false;
}

function safeCheck(row: number, col: number, mat: number[][]) {
  const n = mat.length;

  // check row left
  for (let j = col; j >= 0; j--) {
    if (mat[row][j] === 1) return false;
  }

  // check upper diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (mat[i][j] === 1) return false;
  }

  // check lower diagonal
  for (let i = row, j = col; i < n && j >= 0; i++, j--) {
    if (mat[i][j] === 1) return false;
  }

  return true;
}

nQueen(4);
