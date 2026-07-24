

#   l - 739
def dailyTemperatures(temperatures): 
    n = len(temperatures)
    stack = []
    ansArr = [0]*n
    for i in range(n):
        while(stack and temperatures[i]>temperatures[stack[-1]]):
            top = stack.pop()
            # insert diff in last element index
            ansArr[top] = i-top
        


        # push to stack , curr index
        stack.append(i)
    

    return ansArr


print(dailyTemperatures([73,74,75,71,69,72,76,73]))
print(dailyTemperatures([30,40,50,60]))