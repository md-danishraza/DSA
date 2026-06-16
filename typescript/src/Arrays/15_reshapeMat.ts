export {};

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let m = mat.length || 0;
  let n = mat.length ? mat[0].length : 0;

  // lets find compatility first
  let isCompatible = m * n == r * c;
  if (!isCompatible) return mat;

  let ansArr: number[][] = Array.from({ length: r }, (v) =>
    Array(c).fill(null)
  );

  //   fill matrix
  let k = 0;
  for (let row of mat) {
    for (let item of row) {
      //    get row
      let newRow = Math.floor(k / c);
      // get col
      let newCol = k % c;
      ansArr[newRow][newCol] = item;

      k++;
    }
  }
  console.log(ansArr);
  return ansArr;
}

matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  1,
  4
);
matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  2,
  2
);
matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  2,
  5
);

// Think of the matrix as a flat list of length m * n. Every element has a position k in that list. To place it into the reshaped matrix:

// newRow = Math.floor(k / c) → divides the flat index by the number of columns, so it tells you which row you’re in.

// newCol = k % c → gives the remainder when dividing by the number of columns, so it tells you the position inside that row.

// This mapping is independent of the original shape. As long as the new shape has the same total slots (r * c == m * n), the formula distributes elements correctly.
