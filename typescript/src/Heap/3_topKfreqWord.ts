export {}

// 692. Top K Frequent Words

// Given an array of strings words and an integer k, 
// return the k most frequent strings.
// Return the answer sorted by the frequency from highest to lowest. 
// Sort the words with the same frequency by their lexicographical order.

// TC = N + UlogU.L  (U = unique words, L = length)
// SC = UL
function topKFrequent(words: string[], k: number): string[] {
    let freq = new Map<string,number>()

    for(let word of words){
        if(freq.has(word)){
            freq.set(word,freq.get(word)!+1)
        }else{
            freq.set(word,1)
        }
    }

    let ans:string[] = []

    let count:[string,number][] = []

    for(let [word,wcount] of freq.entries()){
        count.push([word,wcount])
    }

    count.sort((a, b) => {
        if (a[1] !== b[1]) {
             // Higher frequency first
            return b[1] - a[1];
        }
        // Lexicographical order on tie
        return a[0].localeCompare(b[0]); 
    });

    for(let i=0;i<k;i++){
        ans.push(count[i][0])
    }

    return ans
    
};


topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"],4)


