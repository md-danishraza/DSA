
# 1899. Merge Triplets to Form Target Triplet
def mergeTriplets(triplets, target): 
    # set for unique values
    # different target positions successfully covered
    # {0,1,2}
    mySet = set()

    for t in triplets:
        # first check all values is < target [i]
        # if any value is greater than any value of target 
        # then this triplet is of no use
        if(t[0] > target[0] or t[1]>target[1] or t[2]>target[2]): continue


        # now add equal values position to set (usable)
        for i in range(3):
            if(target[i] == t[i]):
                # fill this position
                mySet.add(i)
   
    return len(mySet) == 3

print(mergeTriplets([[2,5,3],[2,3,4],[1,2,5],[5,2,3]],[5,5,5]))
print(mergeTriplets([[3,4,5],[4,5,6]],[3,2,5]))
