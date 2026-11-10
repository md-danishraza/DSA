# Given a string input1, find all characters that occur 
# the maximum number of times in the string. If multiple 
# characters have the same maximum frequency, arrange them
# in ascending order of their last occurrence in the
# string and return them as a single string.


def last_string(str):
    if not str:
        return ""
    
    freq = {}
    last_oc = {}
    
    for i,c in enumerate(str):
        freq[c] = freq.get(c,0) + 1
        last_oc[c] = i
        
    # find max occurence
    max_freq = max(freq.values())
    
    # get list of tied result
    results = [c for c in freq if freq[c] == max_freq]
    # sort using last occurence
    results.sort(key=lambda c: last_oc[c])

    return "".join(results)




print(last_string("abccba"))
print(last_string("banana"))