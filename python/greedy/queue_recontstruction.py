# 
#  406. Queue Reconstruction by Height

# Tall people affect the k-count of shorter people.
# Short people do NOT affect the k-count of taller people.

def reconstructQueue(people):

    # height descending
    # k ascending
    people.sort(key=lambda person: (-person[0], person[1]))

    result = []

    for person in people:
        result.insert(person[1], person)

    return result
print(reconstructQueue([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]))