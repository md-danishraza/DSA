export {};

// 714. Best Time to Buy and Sell Stock with Transaction Fee

// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note:

// You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// The transaction fee is only charged once for each stock purchase and sale.

function maxProfit(prices: number[], fee: number): number {
  let cash = 0;
  let hold = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    // either sell it or don't
    cash = Math.max(cash, prices[i] + hold - fee);

    // either keep holding or buy
    hold = Math.max(hold, cash - prices[i]);
  }

  return cash;
}

// 122. Best Time to Buy and Sell Stock II

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you never hold more than one share of the stock.

// Find and return the maximum profit you can achieve.

function maxProfit2(prices: number[], fee: number): number {
  let cash = 0;
  let hold = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    // either sell it or don't
    cash = Math.max(cash, prices[i] + hold - fee);

    // either keep holding or buy
    hold = Math.max(hold, cash - prices[i]);
  }

  return cash;
}
