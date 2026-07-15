export {};

function ratInAMaze() {
  const mat: number[][] = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 1],
  ];

  const ansArr: string[] = [];

  const visited: boolean[][] = Array.from({ length: mat.length }, () =>
    Array(mat.length).fill(false)
  );

  recursive(mat, ansArr, visited);

  console.log(ansArr);
}

function recursive(
  mat: number[][],
  ansArr: string[],
  visited: boolean[][],
  path: string = "",
  r: number = 0,
  c: number = 0
) {
  const n = mat.length;
  // base case - destination is reached
  if (r === n - 1 && c === n - 1) {
    ansArr.push(path);
    return true;
  }
  //   edge cases
  if (r < 0 || c < 0 || r >= n || c >= n || !mat[r][c] || visited[r][c]) {
    return false;
  }

  // check all possible paths up,down,left,right

  // mark this cell as visited
  visited[r][c] = true;

  // check all possible paths: right, left, top, bottom

  // 1. Right
  recursive(mat, ansArr, visited, path + "R", r, c + 1);

  // 2. Left
  recursive(mat, ansArr, visited, path + "L", r, c - 1);

  // 3. Top
  recursive(mat, ansArr, visited, path + "T", r - 1, c);

  // 4. Bottom (using "D" for down)
  recursive(mat, ansArr, visited, path + "D", r + 1, c);

  // unmark on backtracking
  visited[r][c] = false;

  return false;
}

ratInAMaze();
