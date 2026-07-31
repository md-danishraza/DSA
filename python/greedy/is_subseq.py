
def isSubSeq(s,t):
    # pointer for substring
    i = 0
    # pointer for parent string
    j = 0

    while(i<len(s) and j<len(t)):
        # greedily consider the first match string
        if(s[i] == t[j]):
            # increase i
            i+=1

        # increase j anyway
        j+=1

    # if i is same as length of substring then we have matched all chars in t
    return i==len(s)



print(isSubSeq("abc","ahbgdc"))

