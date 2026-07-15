// naive approach - n3
function printAllSubarraysAndMaxSum(arr: number[]): void {
  let maxSum = -Infinity;
  let maxSubarray: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      let subarray: number[] = [];

      // inner loop to build the subarray and calculate sum
      for (let k = i; k <= j; k++) {
        sum += arr[k];
        subarray.push(arr[k]);
      }

      console.log(`Subarray: [${subarray.join(", ")}], Sum = ${sum}`);

      // check if this subarray has the max sum
      if (sum > maxSum) {
        maxSum = sum;
        maxSubarray = [...subarray];
      }
    }
  }

  console.log("\nMaximum Sum:", maxSum);
  console.log("Subarray with Maximum Sum:", maxSubarray);
}

// Example
// printAllSubarraysAndMaxSum([1, -2, 3, 4, -1]);

// n2 approach with removing third loop just for sum
function printAllSubarraysAndMaxSumBetter(arr: number[]): void {
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      // adding to sum
      sum += arr[j];
      // check if this subarray has the max sum
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  console.log("\nMaximum Sum:", maxSum);
}

// printAllSubarraysAndMaxSumBetter([1, -2, 3, 4, -1]);

function kadanesAlgo(arr: number[]): void {
  let sum = 0;
  let max = -Infinity;
  let start = 0;
  let tempStart = 0; // temp variable to track potential start
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    // if sum = 0 then new start for subarray
    if (sum === 0) {
      tempStart = i;
    }

    sum += arr[i];

    if (sum > max) {
      max = sum;
      // last index for max subarray sum
      start = tempStart;
      end = i;
    }

    // if it's adding no value reset to 0
    // so next subarray will be taken
    if (sum < 0) {
      sum = 0;
    }
  }

  // if all elements are negative, handle separately
  if (max < 0) {
    max = Math.max(...arr);
    const idx = arr.indexOf(max);
    console.log(`subarray is [${arr[idx]}]`);
    console.log(`Maximum Sum = ${max}`);
    return;
  }

  console.log(`subarray is [${arr.slice(start, end + 1).join(", ")}]`);
  console.log(`Maximum Sum = ${max}`);
}

kadanesAlgo([1, -2, 3, 4, -1]);
