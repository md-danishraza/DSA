

def minSetSize(arr):

    # Count frequency of each number
    freq = {}

    for num in arr:
        freq[num] = freq.get(num, 0) + 1

    # We only care about frequencies
    frequencies = list(freq.values())

    # Highest frequency first
    frequencies.sort(reverse=True)

    target = len(arr) // 2

    removed = 0
    sets = 0

    for count in frequencies:
        removed += count
        sets += 1

        if removed >= target:
            break

    return sets


print(minSetSize([3,3,3,3,5,5,5,2,2,7]))
print(minSetSize([7,7,7,7,7,7]))