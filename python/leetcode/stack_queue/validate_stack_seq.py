
# / L - 946
# / Given two integer arrays pushed and popped each with distinct values, 
# / return true if this could have been the result of a sequence of push 
# / and pop operations on an initially empty stack, or false otherwise.

# / Example 1:
# / Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
# / Output: true



# Tc = sc = On
def validateStackSequences(pushed, popped):

    myStack = []
    popInd = 0

    for num in pushed:
        myStack.append(num)

        
        while(len(myStack)>0 and myStack[len(myStack)-1]==popped[popInd]):
            myStack.pop()
            popInd += 1

    return len(myStack) == 0
  
   
print(validateStackSequences([1,2,3,4,5],[4,3,5,1,2]))
print(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]))