


def largestRectangleArea(heights):  
    # stores last index(to which it can be extended), height
    stack = []
    maxArea = 0


    # iterate one time
    for i,height in enumerate(heights):
        # if last value is smaller 
        # we can't extend it 
        # pop it update max area 
        startInd = i
        while (stack and height<stack[-1][1]):
            top = stack.pop()
            startInd = top[0]
            # area = i - startInd (width) * height
            maxArea = max(maxArea,(i-startInd) * top[1])
        

        # push the current height
        stack.append([startInd,height])
    

    # now deal with remaining height in stack
    # these were reached till end (all inreasing order)
    while(stack):
        top = stack.pop()
        startInd = top[0]
        # area = end of list (n-1) - startInd (width) * height
        maxArea = max(maxArea,(len(heights)-startInd) * top[1])
    

    return maxArea


print(largestRectangleArea([2,1,5,6,2,3]))
print(largestRectangleArea([2,4]))