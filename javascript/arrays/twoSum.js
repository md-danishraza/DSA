// find the index of two numbers whose sum == target
function twoSum(array, target) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
}

function twoSum2(nums, target) {
  let complementhash = new Map();

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];

    if (complementhash.has(comp)) {
      result.push(complementhash.get(comp));
      result.push(i);
    }

    // store the number as comp
    complementhash.set(nums[i], i);
  }

  return result;
}

let array = [2, 7, 11, 15, 34, 23, 4, 54, 4354];

// console.log(twoSum(array, 58)); // output: [[0,1]]
