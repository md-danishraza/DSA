from collections import Counter

def balancedString(s):
    n = len(s)
    target = n // 4

    count = Counter(s)

    # check all char count <= target
    # instead of &&
    if all(count[ch] <= target for ch in "QWER"):
        return 0

    left = 0
    ans = n

    # index, value
    for right, ch in enumerate(s):
        # Move character inside the window
        count[ch] -= 1

        # Shrink window while outside is balanced
        while all(count[c] <= target for c in "QWER"):
            ans = min(ans, right - left + 1)
            count[s[left]] += 1
            left += 1

    return ans


print(balancedString("QWER"))  
print(balancedString("QQWE"))  
print(balancedString("QQQW"))   