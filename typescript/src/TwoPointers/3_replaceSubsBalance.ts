export {}

// l - 1234
// You are given a string s of length n containing only four kinds of characters:
//  'Q', 'W', 'E', and 'R'.

// A string is said to be balanced if each of its characters appears n / 4 times 
// where n is the length of the string.

// Return the minimum length of the substring that can be replaced with 
// any other string of the same length to make s balanced. If s is already balanced, return 0.


// tc On , sc O(1)
function balancedString(s: string): number {
    const n = s.length;
    const target = n / 4;

    const count = new Map<string, number>();

    for (const ch of s) {
        count.set(ch, (count.get(ch) ?? 0) + 1);
    }

    function isValid() {
        return (
            (count.get('Q') ?? 0) <= target &&
            (count.get('W') ?? 0) <= target &&
            (count.get('E') ?? 0) <= target &&
            (count.get('R') ?? 0) <= target
        );
    }

    if (isValid()) return 0;

    let left = 0;
    let ans = n;

    for (let right = 0; right < n; right++) {

        // include s[right] inside the window
        count.set(s[right], (count.get(s[right]) ?? 0) - 1);

        while (isValid()) {
            ans = Math.min(ans, right - left + 1);

            // remove s[left] from the window
            count.set(s[left], (count.get(s[left]) ?? 0) + 1);
            left++;
        }
    }

    return ans;
}

console.log(balancedString("QWER")); 
console.log(balancedString("QQWE")); 
console.log(balancedString("QQQW")); 
