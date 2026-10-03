
# l - 787
def findCheapestPrice(self, n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:
    # prices arr for each node n
    prices = [float('inf')] * n
    # src to src cost is 0
    prices[src] = 0

    # k stops and k+1 edges to reach dst
    for i in range(k+1):
        tmpPrices = prices.copy()

        # src,dest,cost
        for s,d,c in flights:
            # didn't reached  src at all
            if(prices[s] == float('inf')):
                continue
            # if inclduing price of current stop < reaching dest tempPrice
            if(prices[s]+c < tmpPrices[d]):
                tmpPrices[d] = prices[s]+c 

        # update org prices from temp 
        prices = tmpPrices

    return prices[dst] if prices[dst] != float('inf') else -1
    