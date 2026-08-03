

def checkIfCanBreak(s1,s2): 
    s1 = sorted(s1)
    s2 = sorted(s2)


    count1 = 0
    count2 = 0

    n = len(s1)

    for i in range(0,len(s1)):
        if(s1[i]>=s2[i]):
            count1 += 1
        if(s2[i]>=s1[i]):
            count2 += 1

    return (count1 == n or count2==n )

print(checkIfCanBreak("abc","xya"))
print(checkIfCanBreak("abe","acd"))