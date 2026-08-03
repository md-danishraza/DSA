# L - 1833
def maxIceCream(costs, coins): 
    
#    Cheapest first
    costs.sort()

    count = 0;

    for cost in costs:
        if (cost > coins):
            break;
        
        coins -= cost;
        count += 1
    

    return count;


print(maxIceCream([10,6,8,7,7,8],8))