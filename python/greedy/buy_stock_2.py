# # 122. Best Time to Buy and Sell Stock II

# You are given an integer array prices where prices[i] is the price of
#  a given stock on the ith day.
# On each day, you may decide to buy and/or sell the stock. You can 
# only hold at most one share of the stock at any time. However, you can
#  sell and buy the stock multiple times on the same day, ensuring you 
# never hold more than one share of the stock.
# Find and return the maximum profit you can achieve.

 

# Example 1:
# Input: prices = [7,1,5,3,6,4]
# Output: 7 (1 to 5, 3 to 6 = 4+3 = 7)


import math

def maxProfit(prices):

    # max profit while i dont own a stock
    cash = 0;
    # max profit whie i own a stock
    hold = -prices[0];

    for i in range(1,len(prices)):
        # either sell it or don't
        cash = math.max(cash, prices[i] + hold)

        # either keep holding or buy
        hold = math.max(hold, cash - prices[i]);
    

    return cash;
