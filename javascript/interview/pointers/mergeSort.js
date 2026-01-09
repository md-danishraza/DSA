//  You have two arrays that are already sorted.
// You need to combine them into one single sorted array

// TC wil be linear (n+k)
function merge(arr1, arr2) {
  const ansArr = [];
  // left arr pointer
  let i = 0;
  // right arr pointer
  let j = 0;

  // two pointer paraller comparison
  while (i < arr1.length && j < arr2.length) {
    // compare and add
    if (arr1[i] < arr2[j]) {
      ansArr.push(arr1[i]);
      i++;
    } else {
      ansArr.push(arr2[j]);
      j++;
    }
  }

  // add remaining
  if (i < arr1.length) ansArr.push(...arr1.slice(i));
  if (j < arr2.length) ansArr.push(...arr2.slice(j));

  return ansArr;
}

console.log(merge([1, 4, 7], [2, 3, 9]));
