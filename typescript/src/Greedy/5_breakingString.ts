export {}

// L - 1433

// tc = nlogn 
// sc = n
function checkIfCanBreak(s1: string, s2: string): boolean {
    // first sort string
    // Sorting puts the smallest values together, then the next smallest, etc.
    // since length is same (otherwise it wont work)
    // being greedy (if first fails then later str also fails)
    s1 = s1.split("").sort().join("")
    s2 = s2.split("").sort().join("")

    // counter
    // s1 breaks s2
    let count1 = 0
    // vice verca 
    let count2 = 0

    let n = s1.length

    for(let i=0;i<n;i++){
        // each pos which string is greater
        if(s1[i]>=s2[i]){
            count1++
        }
        if (s2[i] >= s1[i]) {
            count2++;
        }
    }

    // if any breaks each other return true
    return count1 === n || count2 ===n;
    
};