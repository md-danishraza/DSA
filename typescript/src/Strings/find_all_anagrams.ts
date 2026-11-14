export {}

// l - 468

// Given two strings s and p, return an array of all the start
//  indices of p's anagrams in s. You may return the answer in any order.

function findAnagrams(s: string, p: string): number[] {
    const ans:number[] = []

    if(p.length > s.length) return ans;

     // char map for freq (chars)
    const sCount = Array(26).fill(0) 
    const pCount = Array(26).fill(0)
    
    // 0 index of a will be chatcode of a - 97 (char code of a)
    // helper to get index of letter a-z
    const getIndex = (str:string)=>str.charCodeAt(0) - 'a'.charCodeAt(0)


    // initial window freq count 
    for (let i=0;i<p.length;i++){
        sCount[getIndex(s[i])] += 1
        pCount[getIndex(p[i])] += 1
    }

    // helper to compare anagram
    function match():boolean{
        for(let i=0;i<26;i++){
            if(sCount[i]!==pCount[i]) return false
        }
        return true
    }

    // check initial window
    if(match()) ans.push(0)
    let left = 0
    for(let right=p.length;right<s.length;right++){
        // add right 
        sCount[getIndex(s[right])]++;
        // remove left
        sCount[getIndex(s[left])]--;
        left++;
        if (match()) ans.push(left);
    }


    return ans
};