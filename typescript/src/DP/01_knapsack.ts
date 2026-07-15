export {};

// recursive sol
// return optimal cost/value for a given weight

function knapSackReq(
  bag: { weight: number[]; value: number[] },
  w: number
): number {
  let n = bag.weight.length;
  let globalMax = 0;

  function helper(weigh: number, i: number = 0, currSum: number = 0) {
    // base case
    // if weight becomes negative
    if (weigh < 0) return;

    // if weight becomes 0
    if (weigh === 0) {
      // bag is full
      // check if global max
      globalMax = Math.max(currSum, globalMax);
      return;
    }

    // we reached end
    if (i === n) return;

    // take current
    helper(weigh - bag.weight[i], i + 1, currSum + bag.value[i]);
    // don't take current
    helper(weigh, i + 1, currSum);
  }

  helper(w);

  return globalMax;
}

console.log(
  knapSackReq(
    {
      weight: [1, 3, 4, 5, 7],
      value: [1, 4, 5, 7, 9],
    },
    12
  )
);

// top to down DP, with memo
function knapSackReq2(
  bag: { weight: number[]; value: number[] },
  w: number
): number {
  let n = bag.weight.length;

  let memo = new Map<number, number>();

  function helper(i: number, remainingWeight: number): number {
    // No items left, or bag is full
    if (i === n || remainingWeight === 0) {
      return 0;
    }

    // Check cache
    if (memo.has(remainingWeight)) {
      return memo.get(remainingWeight)!;
    }

    // 3. Don't take current item
    let dontTake = helper(i + 1, remainingWeight);

    // 4. Take current item ( if it fits!)
    let take = 0;
    if (bag.weight[i] <= remainingWeight) {
      take = bag.value[i] + helper(i + 1, remainingWeight - bag.weight[i]);
    }

    // Calculate optimal value, cache it, and return it upwards
    let optimalValue = Math.max(take, dontTake);
    // set cache for current level weight
    memo.set(remainingWeight, optimalValue);

    return optimalValue;
  }

  return helper(0, w);
}

// tabulation (bottom up)

function knapsackBottomUp(
  weights: number[],
  values: number[],
  W: number
): number {
  let n = weights.length;

  // Rows = items (0 to n), Columns = capacity (0 to W)
  let dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(W + 1).fill(0)
  );

  // Loop through every item (starting from item 1)
  for (let i = 1; i <= n; i++) {
    // Loop through every possible weight capacity (1 to W)
    for (let w = 1; w <= W; w++) {
      let currentWeight = weights[i - 1];
      let currentValue = values[i - 1];

      // use previous result
      let dontTake = dp[i - 1][w];

      // Take it (if it fits in the current capacity 'w')
      let take = 0;
      if (currentWeight <= w) {
        take = currentValue + dp[i - 1][w - currentWeight];
      }

      // Store the maximum of the two choices in current i,w matrix
      dp[i][w] = Math.max(take, dontTake);
    }
  }

  //  final answer is in the bottom-right corner of the table
  return dp[n][W];
}

console.log(knapsackBottomUp([1, 3, 4, 5], [1, 4, 5, 7], 7));

console.log(
  knapSackReq2(
    {
      weight: [1, 3, 4, 5],
      value: [1, 4, 5, 7],
    },
    7
  )
);
