export {};

// 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

function maxArea(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[]
): number {
  //   include edges cuts
  horizontalCuts = [0, ...horizontalCuts, h];
  verticalCuts = [0, ...verticalCuts, w];

  // sort cuts
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  // finding maximum consecutive gaps
  let hMaxGap = 0;
  for (let i = 1; i < horizontalCuts.length; i++) {
    let gap = horizontalCuts[i] - horizontalCuts[i - 1];
    hMaxGap = Math.max(gap, hMaxGap);
  }
  let vMaxGap = 0;
  for (let i = 1; i < verticalCuts.length; i++) {
    let gap = verticalCuts[i] - verticalCuts[i - 1];
    vMaxGap = Math.max(gap, vMaxGap);
  }

  const MOD = 1e9 + 7;
  return Number((BigInt(vMaxGap) * BigInt(hMaxGap)) % BigInt(MOD));
}

console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
console.log(maxArea(5, 4, [3, 1], [1]));
console.log(maxArea(5, 4, [3], [3]));
