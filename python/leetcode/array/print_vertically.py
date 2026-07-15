def printVertically(s) :
    # 1. Split string into words
    words = s.split(" ")

    # 2. Find the length of the longest word
    max_len = max(len(word) for word in words)

    ans_arr = []

    # 3. Build vertical words column by column
    for i in range(max_len):
        temp_word = ""
        for word in words:
            if i<len(word):
                temp_word += word[i]
            else:
                temp_word += " "
        # Trim trailing spaces
        ans_arr.append(temp_word.rstrip())
        
    return ans_arr



print(printVertically("HOW ARE YOU"))


print(printVertically("TO BE OR TO BE NOT BE"))

