

def findDuplicate(paths):

    hashmap = {}

    for dir in paths:

        files = dir.split(" ")
        

        for file in files[1:]:

            # get content 
            # n.txt(content)
            idx = file.find("(")
            fileName = file[0:idx]
            content = file[idx+1:-1]

            # if file present in hash
            if(content in hashmap):
                # then push this file with full route + name
                hashmap.get(content).append(files[0]+"/"+fileName)
            else:
                 hashmap[content] = [files[0]+"/"+fileName]
            

    # now simple insert into list
    duplicateFiles = []
    for fileList in hashmap.values():
        ## if files are duplicates
        if(len(fileList)>1):
            duplicateFiles.append(fileList)

   

    return duplicateFiles



print(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]))
print(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]))