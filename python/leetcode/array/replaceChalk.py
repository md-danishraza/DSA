def chalkReplacer(chalk, k):
    # total chalk used in one full round
    total = sum(chalk)

    # reduce k to the remainder after full rounds
    k %= total

    # find the first student who cannot use chalk
    for i, c in enumerate(chalk):
        if k < c:
            return i
        k -= c
