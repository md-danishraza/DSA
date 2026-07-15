
from math import floor


def matrixReshape(mat,r,c):
    m = len(mat) if mat else 0
    n = len(mat[0]) if mat else 0


    if (m*n != r*c): return mat

    ansArr = [[None for i in range(c)] for i in range(r)]



     # fill matrix
    k = 0
    for row in mat:
        for item in row:
            newRow = floor(k / c)
            newCol = k % c
            ansArr[newRow][newCol] = item
            k += 1

    print(ansArr)
    return ansArr








matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  1,
  4
)
matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  2,
  2
)
matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  2,
  5
)
