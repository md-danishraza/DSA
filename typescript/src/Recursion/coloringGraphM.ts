function coloringGraph(v: number, edges: number[][], m: number) {
  // creat adjacency matrix (index represent vertex)
  const adj: number[][] = new Array(v).fill(0).map(() => []);

  //   building from edges
  for (let [u, w] of edges) {
    adj[u].push(w);
    adj[w].push(u);
  }

  //   creating color map array = np. of vertex
  const colorMap = new Array(v).fill(-1);
  // start from vertex 0
  return canColor(0, m, adj, colorMap);
}

function canColor(
  vertex: number,
  m: number,
  adj: number[][],
  colorMap: number[]
) {
  // base case
  // end vertex colored
  if (vertex === colorMap.length) {
    return true;
  }

  // trying all colors from 0 to m-1
  for (let i = 0; i < m; i++) {
    if (issafe(vertex, i, adj, colorMap)) {
      // mark color to that vertex
      colorMap[vertex] = i;
      // recursion for next vertex
      if (canColor(vertex + 1, m, adj, colorMap))
        // If the rest can be colored, return true
        return true;
      // if not possible than backtrack and check for next color
      colorMap[vertex] = -1;
    }
  }

  // No valid coloring found
  //   not correct recursion path
  return false;
}

function issafe(
  vertex: number,
  i: number,
  adj: number[][],
  colorMap: number[]
) {
  // check whether adjacent vertex has same color or not
  for (let adjVertex of adj[vertex]) {
    // if any adjacent vertex is colored and same return false
    if (colorMap[adjVertex] !== -1 && colorMap[adjVertex] == i) {
      return false;
    }
  }

  //   if none of adjacent vertex is of same of color
  return true;
}

// no. of vertex
const V = 4;
// edges connection
const edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 3],
  [2, 3],
];
// max color
const m = 3;
const validM = coloringGraph(V, edges, m);
console.log(`whether coloring is possible if M = ${m}`);
console.log(validM);
