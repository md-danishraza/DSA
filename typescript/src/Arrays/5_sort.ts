// Remove duplicates from sorted array
function removeDuplicate(nums: Array<number>): Array<number> {
  const newArray = Array.from(new Set(nums)).sort((a, b) => a - b);

  return newArray;
}
// filter + indexof
function removeDuplicate2(nums: Array<number>): Array<number> {
  return nums.filter((item, index) => nums.indexOf(item) === index);
}

// reduce
function removeDuplicate3(nums: Array<number>): Array<number> {
  const result = nums.reduce((newArray: number[], num: number) => {
    if (!newArray.includes(num)) {
      newArray.push(num);
      return newArray;
    } else {
      return newArray;
    }
  }, [] as number[]);

  return result;
}

const arr1 = [1, 2, 3, 34, 44, 44, 223, 2, 2];

console.log(removeDuplicate(arr1));
console.log(removeDuplicate2(arr1));
console.log(removeDuplicate3(arr1));
