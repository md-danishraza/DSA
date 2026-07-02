

#  714. Best Time to Buy and Sell Stock with Transaction Fee

#  You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

# Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

# Note:

# You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
# The transaction fee is only charged once for each stock purchase and sale.

def maxProfit2(prices, fee):  
#   raw cash (selling or not selling)
  cash = 0
#   net worth (buying or keeping)
  hold = -prices[0]

  for price in prices[1:]:
    cash = max(cash, price + hold - fee)

    hold = max(hold, cash - prices)
  

  return cash


# 122. Best Time to Buy and Sell Stock II
#  You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

# On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you never hold more than one share of the stock.

# Find and return the maximum profit you can achieve.

def maxProfit2(prices):  
  cash = 0
  hold = -prices[0]

  for price in prices[1:]:
    cash = max(cash, price + hold )

    hold = max(hold, cash - prices)
  

  return cash

