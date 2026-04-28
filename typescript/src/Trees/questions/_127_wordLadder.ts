export {};

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  // set for constant lookup
  const wordSet = new Set(wordList);

  // if list don't contain endword
  if (!wordSet.has(endWord)) {
    return 0;
  }

  // for visited word tracking
  //   let visited = new Set();
  let queue = new Queue<string>();

  // start with begin word
  queue.enqueue(beginWord);
  let length = 1;

  wordSet.delete(beginWord);
  while (queue.size()) {
    let levelSize = queue.size();

    // for each word in this level
    for (let i = 0; i < levelSize; i++) {
      // get current word
      let word = queue.dequeue()!;

      // found target , no need to check more
      if (word === endWord) {
        return length;
      }

      // for each char of this word
      // replace it with a-z and check in wordList
      for (let j = 0; j < word?.length; j++) {
        for (
          let charCode = "a".charCodeAt(0);
          charCode <= "z".charCodeAt(0);
          charCode++
        ) {
          let c = String.fromCharCode(charCode);

          // if letter is same, skip it
          if (word[j] === c) continue;
          // create new word
          let newWord = word.slice(0, j) + c + word.slice(j + 1);

          if (wordSet.has(newWord)) {
            queue.enqueue(newWord); // Add to next level
            // remove from wordset
            wordSet.delete(newWord);
          }
        }
      }
    }

    length += 1;
  }

  // not found
  return 0;
}
