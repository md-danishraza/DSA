

def partitionLabels(s):

    ansArr = []

    map = {}

    for i,char in enumerate(s):
        map[char] = i


    # print(map)
    start = 0
    end = 0
    
    for i,char in enumerate(s):
        end = max(end,map[char])

        if(end == i):
            ansArr.append(end-start+1)
            start = i + 1

    return ansArr

partitionLabels("ababcbacadefegdehijhklij")
partitionLabels("eccbbbbdec")

