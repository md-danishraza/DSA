

# TC = O(n + n + n + n) = On
# SC = On (array)

def validParenthisis(s):
    res = []
    # track open parenthisis
    count = 0
    for c in s:
        if c=='(':
            res.append(c)
            count += 1 
        elif c==')':
            # if  opening parenthisis 
            # take it 
            if count>0:
                res.append(c)
                count -= 1
        else:
            # insert any non parenthesis
            res.append(c)

    # now take care of extra opening parenthis
    # for that we will iterate from reverse
    filtered = []
    for c in res[::-1]:
        if(c == '(' and count>0):
            count -= 1
        else:
            filtered.append(c)

    # reverse
    return ''.join(reversed(filtered))


print(validParenthisis('lee(t(c)o)de)'))
print(validParenthisis('a)b(c)d'))
print(validParenthisis('))(('))
