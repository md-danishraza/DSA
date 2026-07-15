def longestCommonPrefix(strs):
    if not strs:
        return ""

    # Start with the first word as the prefix
    prefix = strs[0]

    # Compare with each word
    for word in strs[1:]:
        # Trim prefix until it matches the start of word
        while not word.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""  # no common prefix

    return prefix


# Examples
print(longestCommonPrefix(["flower", "flow", "flight"]))  # "fl"
print(longestCommonPrefix(["dog", "racecar", "car"]))     # ""
print(longestCommonPrefix(["interspecies", "interstellar", "interstate"]))  # "inters"
