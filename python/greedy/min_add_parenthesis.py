def minAddToMakeValid(s):

    open = 0
    close = 0

    for char in s:

        if char == "(":
            open += 1

        elif open:
            open -= 1

        else:
            close += 1

    return open + close


print(minAddToMakeValid("())"))
print(minAddToMakeValid("((("))
print(minAddToMakeValid("()"))
print(minAddToMakeValid("()))(("))