export {}

// leetcode - 77
// TC = On 
// sc = 01
function minWindow(s: string, t: string): string {
    if (!t.length) return "";

    const countT = new Map<string, number>();
    const window = new Map<string, number>();

    for (let i = 0; i < t.length; i++) {
        countT.set(t[i], (countT.get(t[i]) ?? 0) + 1);
    }

    let [have, need] = [0, countT.size];
    let res = [-1, -1];
    let resLen = Infinity;
    
    // left pointer
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        const c = s[r];
        // add to window
        window.set(c, (window.get(c) ?? 0) + 1);

        if (countT.has(c) && countT.get(c) === window.get(c)) {
            // satisfied a needed char condition
            have += 1;
        }
        
        // while current window contains all needed chars 
        while (have === need) {
            // update result
            if (r - l + 1 < resLen) {
                res = [l, r];
                resLen = r - l + 1;
            }
            
            const leftChar = s[l];
            // pop from left
            window.set(leftChar, window.get(leftChar)! - 1);

            // If we dropped below the required amount, we no longer "have" this char's requirement met
            if (countT.has(leftChar) && window.get(leftChar)! < countT.get(leftChar)!) {
                have -= 1;
            }

            l += 1;
        }
    }

    const [left, right] = res;
    return resLen !== Infinity ? s.substring(left, right + 1) : "";
}