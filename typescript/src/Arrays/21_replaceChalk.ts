export {};

// l - 1894

/*
Input: chalk = [5,1,5], k = 22
Output: 0
Explanation: The students go in turns as follows:
- Student number 0 uses 5 chalk, so k = 17.
- Student number 1 uses 1 chalk, so k = 16.
- Student number 2 uses 5 chalk, so k = 11.
- Student number 0 uses 5 chalk, so k = 6.
- Student number 1 uses 1 chalk, so k = 5.
- Student number 2 uses 5 chalk, so k = 0.
Student number 0 does not have enough chalk, so they will have to replace it.
*/

function chalkReplacer(chalk: number[], k: number): number {
  let n = chalk.length;
  let i = 0;
  while (true) {
    // reset index
    if (i >= n) {
      i = 0;
    }

    // pieces fell short
    // this student will replace the chalk
    if (k < chalk[i]) {
      console.log(
        `student number ${i} does not have enough chalk so they will have to replace it.`
      );
      return i;
    } else {
      // else reduce chalk pieces
      console.log(`student number ${i} uses ${chalk[i]} chalk so k = ${k}`);
      k -= chalk[i++];
    }
  }
}

chalkReplacer([5, 1, 5], 22);
