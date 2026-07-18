export {}

// tc On, sc On 
function lengthOfLongestSubstring(s: string): number {

    let longestSub = 0

    // for uniqueness within a window
    let set = new Set<string>()

    let [left,right] = [0,0]

    // till end
    while(right<s.length){
        // check in set
        // remove from left till window has unique strings
        while(set.has(s[right])){
            // shrink window
            set.delete(s[left])
            left++
        }

        // add to set
        set.add(s[right])
        // update length
        longestSub = Math.max(right - left + 1,longestSub)
        // increase right
        right++
    }
    
    return longestSub
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))


// optimal approach with same tc and sc as above
// but fewer operations

function lengthOfLongestSubstring2(s: string): number {
    // index of each char
    const lastSeen = new Map<string, number>();

    let left = 0;
    let ans = 0;

    for (let right = 0; right < s.length; right++) {
        // if duplicate 
        // then directly jump the left pointer
        if (lastSeen.has(s[right])) {
            left = Math.max(left, lastSeen.get(s[right])! + 1);
        }

        // set current one as seem
        lastSeen.set(s[right], right);

        // update ans with longest length of any substring
        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}