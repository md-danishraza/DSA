
def intersect_bruteforce(nums1, nums2):
    result = []
    # to track used element of other array
    used = [False] * len(nums2)   

    for x in nums1:
        for j, y in enumerate(nums2):
            if not used[j] and x == y:
                result.append(x)
                used[j] = True
                break
    return result

# print(intersect_bruteforce([1,2,2,1], [2,2]))       
# print(intersect_bruteforce([4,9,5], [9,4,9,8,4]))   




def intersect_hashmap(nums1: list[int], nums2: list[int]) -> list[int]:
    # count frequencies in smaller array
    # swap ref
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1

    counts = {}
    for num in nums1:
        # get fn to avoid key error
        counts[num] = counts.get(num,0) + 1


    result = []

    for x in nums2:
        if not counts.get(x,0): continue
        if counts[x] > 0:
            result.append(x)
            counts[x] -= 1
    return result

print(intersect_hashmap([1,2,2,1], [2,2]))       
print(intersect_hashmap([4,9,5], [9,4,9,8,4]))   



def intersect_sorted(nums1: list[int], nums2: list[int]) -> list[int]:
    nums1.sort()
    nums2.sort()
    i = j = 0
    result = []

    while i < len(nums1) and j < len(nums2):
        if nums1[i] == nums2[j]:
            result.append(nums1[i])
            i += 1
            j += 1
        elif nums1[i] < nums2[j]:
            i += 1
        else:
            j += 1
    return result

# print(intersect_sorted([1,2,2,1], [2,2]))       
# print(intersect_sorted([4,9,5], [9,4,9,8,4]))  
