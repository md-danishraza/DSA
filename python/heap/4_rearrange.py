from collections import Counter

def rearrange(barcodes):

    # find count freq
    freq = Counter(barcodes)

    # conver to list
    count = list(freq.items())


    index = 0
    ans = [0] * len(barcodes)

    for code,freq in count:
        for _ in range(freq):
            ans[index] = code
            index += 2
            if(index>=len(barcodes)):
                index = 1

    return ans


print(rearrange([1,1,1,1,2,2,3,3]))