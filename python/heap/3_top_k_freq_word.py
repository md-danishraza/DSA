from collections import Counter


def topKfreqWord(words,k):
    freq = Counter(words)

    count = list(freq.items())
    # sort
    # freq-desc and word-asc using lexical
    count.sort(key=lambda x: (-x[1],x[0]))

    return [word for word,count in count[:k]]


print(topKfreqWord(["i", "love", "leetcode", "i", "love", "coding"],2))