

from bisect import bisect_right


# sc = O(1), TC = nlogn * logr 
def kthSmallest(matrix,k):

    # get low , high 
    l,h,n = matrix[0][0],matrix[-1][-1],len(matrix)

    while l<h:
        mid = (l+h)//2

        if(less_k(mid,matrix,n)<k):
            l = mid + 1
        else:
            h = mid
    return l

def less_k(k,matrix,n):
    # count no. of values <= k
    count = 0
    for row in range(n):
        x = bisect_right(matrix[row],k)
        count += x

    return count


print(kthSmallest([[1,5,9],[10,11,13],[12,13,15]],8))