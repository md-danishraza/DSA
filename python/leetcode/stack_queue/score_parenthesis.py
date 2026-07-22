def scoreOfParentheses(s: str) -> int:

    stack = []
    score = 0

    for ch in s:

        if ch == "(":
            # Save previous score
            stack.append(score)
            score = 0

        else:
            # Previous score + current pair score
            score = stack.pop() + max(2 * score, 1)

    return score


print(scoreOfParentheses("()"))         
print(scoreOfParentheses("(())"))       
print(scoreOfParentheses("()()"))       
print(scoreOfParentheses("(()(()))"))   
print(scoreOfParentheses("((()))"))     