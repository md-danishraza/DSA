export {};

// 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board: string[][]): boolean {
  type SetsDict = Record<string, Set<string>>;
  // const dict: { [key: string]: Set<string> } = {};

  let rowsSets: SetsDict = {};
  let colsSets: SetsDict = {};
  let boxSets: SetsDict = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // if empty continue
      if (board[i][j] === ".") continue;

      //   initialise sets
      if (!rowsSets[i]) rowsSets[i] = new Set();
      //   nullish coelescing sytax
      colsSets[j] ??= new Set();
      const boxKey = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
      colsSets[j];
      if (!boxSets[boxKey]) {
        boxSets[boxKey] = new Set();
      }

      // if exists in set (duplicate)
      if (
        rowsSets[i].has(board[i][j]) ||
        colsSets[j].has(board[i][j]) ||
        boxSets[boxKey].has(board[i][j])
      )
        return false;

      // else add to set
      rowsSets[i].add(board[i][j]);
      colsSets[j].add(board[i][j]);
      boxSets[boxKey].add(board[i][j]);
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
