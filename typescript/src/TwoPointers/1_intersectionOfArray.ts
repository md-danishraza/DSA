export {};

// l - 350
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// brute force
// m*n
function intersect(nums1: number[], nums2: number[]): number[] {
  // brute force
  let m = nums1.length;
  let n = nums2.length;

  let smaller: number;
  if (m < n) {
    smaller = m;
  } else smaller = n;

  let ansArr: number[] = [];
  for (let i = 0; i < m; i++) {
    // check in other array
    for (let j = 0; j < n; j++) {
      if (nums1[i] === nums2[j]) {
        ansArr.push(nums1[i]);
        // break inner look for next outer loop
        break;
      }
    }
  }

  return ansArr;
}

// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

// If arrays are unsorted and  want linear time > Hash Map Counting.
//  tc = m + n
function intersect2(nums1: number[], nums2: number[]): number[] {
  // find smaller array
  // simple swap ref
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

  // create count map
  // and count each element in smaller array
  let map = new Map<number, number>();
  for (let num of nums1) {
    // if not exist then initiate with 0 else plus
    map.set(num, (map.get(num) || 0) + 1);
  }

  let result: number[] = [];
  //   check for num in other array
  // if found and count is > 0 then decrease the count and add it
  for (let num of nums2) {
    if (!map.has(num)) continue;
    if (map.get(num)! > 0) {
      result.push(num);
      // decrease count
      map.set(num, map.get(num)! - 1);
    }
  }

  return result;
}

// console.log(intersect2([1, 2, 2, 1], [2, 2]));
// console.log(intersect2([4, 9, 5], [9, 4, 9, 8, 4]));

// Sorting + Two Pointers
//  tc = mlogm + nlogn
// Sort both arrays.
// Use two pointers to walk through them:
// If equal → add to result, move both pointers.
// If one is smaller → move that pointer.

function intersect3(nums1: number[], nums2: number[]): number[] {
  //    sort
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  //   pointers
  let i = 0;
  let j = 0;
  let result = [];

  while (i < nums1.length && j < nums2.length) {
    // if matches
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      // increase both
      i++;
      j++;
    }

    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

console.log(intersect3([1, 2, 2, 1], [2, 2]));
console.log(intersect3([4, 9, 5], [9, 4, 9, 8, 4]));
