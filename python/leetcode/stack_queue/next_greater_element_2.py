

def nextGreaterElements(nums):

    n = len(nums)
    ansArr =[-1] * n
    stack = []


    for i in range(0,2*n):
        idx = i%n

        while stack and nums[idx]>nums[stack[-1]]:
            top = stack.pop()
            ansArr[top]=nums[idx]

        if(i<n):
            stack.append(idx)

    return ansArr


print(nextGreaterElements([1,2,1]))
print(nextGreaterElements([1,2,3,4,3]))