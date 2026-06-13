export {};
// TC = S + M*N
// SC = M*N
function printVertically(s: string): string[] {
  // m*n
  let arr: string[][] = [];
  // m = no. of words
  let arrLength = 0;
  // n = length of largest word
  let largestWordL = 0;
  let tempWordL = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      arrLength++;

      largestWordL = Math.max(largestWordL, tempWordL);
      tempWordL = 0;
      continue;
    }

    tempWordL++;
    // ensure arr[arrLength] exists
    if (!arr[arrLength]) {
      arr[arrLength] = [];
    }
    arr[arrLength].push(s[i]);
  }

  // Catch the last word's length after the loop ends!
  largestWordL = Math.max(largestWordL, tempWordL);

  // console.log(arr);
  // console.log(arrLength);
  // console.log(largestWordL);

  let ansArr: string[] = [];
  // for each char (n) = col
  for (let i = 0; i < largestWordL; i++) {
    let tempWord: string = "";
    // m = row
    // create a string vertical chars
    for (let j = 0; j <= arrLength; j++) {
      // not found index is undefined in js
      if (!arr[j][i]) {
        tempWord = tempWord.concat(" ");
      } else {
        tempWord = tempWord.concat(arr[j][i]);
      }
    }

    ansArr.push(tempWord.trimEnd());
    tempWord = "";
  }
  console.log(ansArr);
  return ansArr;
}

function printVertically2(s: string): string[] {
  let wordsArr = s.split(" ");

  let maxWordL = 0;

  for (let word of wordsArr) {
    maxWordL = Math.max(maxWordL, word.length);
  }

  // create ans arry column by column
  let ansArr: string[] = [];
  for (let i = 0; i < maxWordL; i++) {
    let tempWord = "";

    for (let word of wordsArr) {
      if (word.charAt(i)) {
        tempWord += word[i];
      } else {
        tempWord += " ";
      }
    }

    ansArr.push(tempWord.trimEnd());
  }
  // console.log(ansArr);
  return ansArr;
}

printVertically2("HOW ARE YOU");
printVertically2("TO BE OR TO BE NOT BE");
printVertically2("CONTEST IS COMING");
