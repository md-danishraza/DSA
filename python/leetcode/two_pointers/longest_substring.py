def lengthOfLongestSubstring(s):
    # set for uniqueness
    last_seen = {}

    left = 0
    ans = 0

    for right, ch in enumerate(s):

        if ch in last_seen:
            left = max(left, last_seen[ch] + 1)

        last_seen[ch] = right

        ans = max(ans, right - left + 1)

    return ans


print(lengthOfLongestSubstring("abcabcbb"))
print(lengthOfLongestSubstring("bbbbb"))
print(lengthOfLongestSubstring("pwwkew"))