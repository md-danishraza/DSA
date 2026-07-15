export {};
///You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

function partitionLabels(s: string): number[] {
  let parts: number[] = [];

  // last occurence for each char
  let map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], i);
    else map.set(s[i], i);
  }

  //   console.log(map);
  //   greedy partitioning
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    // greedy
    // update end (expand end while scanning)
    end = Math.max(end, map.get(s[i])!);

    // partition end
    if (i === end) {
      parts.push(end - start + 1);
      // reset start
      start = i + 1;
    }
  }
  //   console.log(parts);
  return parts;
}

partitionLabels("ababcbacadefegdehijhklij");
partitionLabels("eccbbbbdec");
