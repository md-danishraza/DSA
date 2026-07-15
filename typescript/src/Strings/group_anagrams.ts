export {};
// l-49
function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();

  for (let str of strs) {
    // so anagrams can be identified
    let key = str.split("").sort().join("");

    // check in map
    if (map.has(key)) {
      // its the anagram
      // add to it
      map.get(key)!.push(str);
    } else {
      // if not in map
      // then create a key of it
      // and first value will be itself
      map.set(key, [str]);
    }
  }

  //   now create output array
  let output: string[][] = [];
  for (let values of map.values()) {
    output.push(values);
  }

  return output;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["", ""]));

function groupAnagrams2(strs: string[]): string[][] {
  let map = new Map<string, string[]>();

  for (let str of strs) {
    // Create an array of 26 zeros for the letters a-z
    let count = new Array(26).fill(0);

    // Count the frequency of each character in O(K) time
    for (let char of str) {
      // "a".charCodeAt(0) is 97. We subtract 97 to map 'a' to index 0, 'b' to 1, etc.
      count[char.charCodeAt(0) - 97]++;
    }

    // Convert the count array to a string to use as the map key
    // Example: "1,0,0,0,1,0..."
    let key = count.join(",");

    // Add to map in O(1) time
    if (!map.has(key)) {
      map.set(key, []);
    }

    // Much faster than array spreading!
    map.get(key)!.push(str);
  }

  // Array.from easily converts map values to an array
  return Array.from(map.values());
}
