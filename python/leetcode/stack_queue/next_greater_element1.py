

#  L - 496 

#  Tc=Sc = On
#  stack + map
def nextGreaterElement(nums1, nums2): 
    
    stack = []
    map = {}

    # create map for next greater in nums2
    # since num1 is subset
    for num in nums2:
        # check with last num 
        while(stack and num>stack[-1]):
            top = stack.pop()
            # set num as its next greater
            map[top] = num
        

        # push num in stack
        stack.append(num)
    
    # insert -1 in not remaining values
    while(stack):
        map[stack.pop()] = -1
    

    # return ans
    ansArr = []
    # since num1 is subset of num2 (so map will have all values)
    for num in nums1:
        ansArr.append(map[num])

    return ansArr


print(nextGreaterElement([4,1,2],[1,3,4,2]))