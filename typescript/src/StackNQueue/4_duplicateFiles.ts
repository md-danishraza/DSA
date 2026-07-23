export {}

//  L - 609
// Find duplicate file in system

// Given a list paths of directory info, including the directory path, and all the files
//  with contents in this directory, return all the duplicate files in the file system 
// in terms of their paths. You may return the answer in any order.

// A group of duplicate files consists of at least two files that have the same content.

// A single directory info string in the input list has the following format:

// "root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
// It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content,
//  f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". 
// Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

// The output is a list of groups of duplicate file paths. For each group, it contains
//  all the file paths of the files that have the same content. A file path is a string
//  that has the following format:

// "directory_path/file_name.txt"

// Example 1:
// Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)",
// "root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
// Output: 
// [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]


// Tc = O( F *  L)
// F = total files in each dir
// L = avg length of each files
// SC = O(F) 
function findDuplicate(paths: string[]): string[][] {
    
    let hashmap = new Map<string,string[]>()

    for(let dir of paths){

        // make list of files
        // 0th = dir
        // 1 - n th = files
        let files = dir.split(" ")

        // for each file check map
        for(let i=1;i<files.length;i++){

            // get content 
            // n.txt(content)
            const idx = files[i].indexOf("(");
            const fileName = files[i].slice(0, idx);
            const content = files[i].slice(idx + 1, -1);

            // if file present in hash
            if(hashmap.has(content)){
                // then push this file with full route + name
                hashmap.get(content)!.push(files[0]+"/"+fileName)
            }else{
                 hashmap.set(content,[files[0]+"/"+fileName])
            }
        }

    }

     // now simple insert into list
        let duplicateFiles:string[][] = []
        for(let list of hashmap.values()){
            // if files are duplicates
            if(list.length>1){
                duplicateFiles.push(list)

            }
        }

        return duplicateFiles
};


console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]))
console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]))