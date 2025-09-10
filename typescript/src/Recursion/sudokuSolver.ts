function sudoku(mat: number[][], row: number = 0, col: number = 0) {
  // base case = all elements checked 9*9
  if (row === 8 && col === 9) {
    return true;
  }

  // if last column row then move to next row
  // checking right to left
  // so in recursion we will only increase column
  if (col === 9) {
    row++;
    col = 0;
  }

  // if cell is already occupied move forward
  if (mat[row][col]) {
    return sudoku(mat, row, col + 1);
  }

  // check valid num
  for (let i = 1; i <= 9; i++) {
    if (isValid(mat, row, col, i)) {
      // add that number
      mat[row][col] = i;
      // if i is actual answer then return true
      if (sudoku(mat, row, col + 1)) return true;
      // else remove it and check for upcoming nums
      mat[row][col] = 0;
    }
  }
  // if not valid return false
  return false;
}

function isValid(
  mat: number[][],
  row: number,
  col: number,
  num: number
): boolean {
  // Check if num exists in the row
  for (let x = 0; x < 9; x++) if (mat[row][x] === num) return false;

  // Check if num exists in the col
  for (let x = 0; x < 9; x++) if (mat[x][col] === num) return false;

  // Check if num exists in the 3x3 sub-matrix
  const startRow = row - (row % 3),
    startCol = col - (col % 3);

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (mat[i + startRow][j + startCol] === num) return false;

  return true;
}

const mat = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

sudoku(mat);

mat.forEach((row) => console.log(row.join(" ")));
