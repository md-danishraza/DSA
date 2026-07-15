// nums1 = [4,1,2]
// nums2 = [1,3,4,2]

function bigRightInt(arr, subArr) {
  let ansArr = [];

  for (let int of subArr) {
    let BigInt = getBig(arr, int);
    // console.log(BigInt);
    ansArr.push(BigInt);
  }
  return ansArr;
}

function getBig(arr, int) {
  // get index
  const i = arr.indexOf(int);

  let max = int;
  for (let j = i; j < arr.length; j++) {
    // if found upcoming bigger element
    if (max < arr[j]) {
      max = arr[j];
      break;
    }
  }
  if (max > int) {
    return max;
  } else {
    return -1;
  }
}

console.log(bigRightInt([1, 3, 4, 2], [4, 1, 2]));

function nextGreater(arr, subArr) {
  // create monotonic stack
  const stack = [];
  // map for mapping the greater element of any element
  const map = new Map();

  for (let value of arr) {
    // if value is greater than pop from stack and insert in set
    // do same while this condtion met
    while (stack.length && stack[stack.length - 1] < value) {
      // pop and create index
      map.set(stack.pop(), value);
    }
    // if not insert smaller value
    // push the value else
    stack.push(value);
  }

  //   map and return
  //   if key exist than value otherwise -1
  return subArr.map((value) => map.get(value) ?? -1);
}

console.log(nextGreater([1, 3, 4, 2, 5, 8], [5, 1, 2, 4]));
