export {};

function longestCommonPrefix(strs: string[]): string {
  let longestPrefix: string = "";

  for (let word of strs) {
    // if first word
    if (!longestPrefix.length) {
      longestPrefix = word;
    }

    if (longestPrefix == "") return "";

    // trim (prefix) until it starts with prefix
    while (!word.startsWith(longestPrefix)) {
      longestPrefix = longestPrefix.slice(0, -1);

      // no common prefix
      if (!longestPrefix) return "";
    }
  }
  console.log(longestPrefix);
  return longestPrefix;
}

longestCommonPrefix(["flower", "flow", "flight"]);
