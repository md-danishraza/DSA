export {}
// l - 567
// tc = 26*n = n
// sc = 1
function  checkInclusions(s1:string,s2:string):boolean {
    // check length
    if(s1.length > s2.length) return false

    // char map for freq (chars)
    const s1Count = Array(26).fill(0) 
    const s2Count = Array(26).fill(0)
    
    // 0 index of a will be chatcode of a - 97 (char code of a)
    // helper to get index of letter a-z
    const getIndex = (str:string)=>str.charCodeAt(0) - 'a'.charCodeAt(0)

    // initial window freq count 
    for (let i=0;i<s1.length;i++){
        s1Count[getIndex(s1[i])] += 1
        s2Count[getIndex(s2[i])] += 1
    }

    // helper to compare permutation (anagram essentially)
    function match():boolean{
        for(let i=0;i<26;i++){
            if(s1Count[i]!==s2Count[i]) return false
        }
        return true
    }

    // check initial window
    if(match()) return true

    // check all window 
    let left = 0
    for(let right=s1.length;right<s2.length;right++){
        // add right 
        s2Count[getIndex(s2[right])]++;
        // remove left
        s2Count[getIndex(s2[left])]--;
        left++;
        
        if (match()) return true;
    }

    return false
}