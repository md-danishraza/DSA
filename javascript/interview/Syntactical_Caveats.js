// Q1.Write a function sumArray(arr) that returns the sum of all the elements in an input array.

function sumArray(arr) {
  return arr.reduce((u, v) => u + v, 0);
}
const nums = [1, 2, 3, 4, 5];
// console.log(sumArray(nums));

// Q2. Write a function isPalindrome to demonstrate.
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
// console.log(isPalindrome("madam"));

// Q3.find the maximum difference between any two elements in an input array?
function maxDiff(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let value of arr) {
    if (value < min) min = value;
    else max = value;
  }
  return max - min;
}
// console.log(maxDiff(nums));

// Q4. isPrime
function isPrime(num) {
  // Prime numbers are natural numbers greater than 1.
  if (num <= 1) {
    return false;
  }

  // 2 is the only even prime number.
  if (num === 2) {
    return true;
  }

  // If the number is even and greater than 2, it's not prime.
  if (num % 2 === 0) {
    return false;
  }

  // checking for divisibility from 3 up to the square root of the number.
  // skipping even numbers by incrementing by 2.
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  // If no divisors are found, the number is prime.
  return true;
}

// console.log(isPrime(55));
// console.log(isPrime(79));

// Q5. write a function removeFalsyValues(arr) that removes falsy values from an array
function removeFalsyValues(arr) {
  return arr.filter((value) => (value ? true : false));
}
// console.log(removeFalsyValues([1, 3, 0, 3, 4, "", 3]));

// Q6. How can you convert an array of objects into a single object?
function toSingleObject(arrObjects) {
  const output = {};
  for (let item of arrObjects) {
    for (let [key, value] of Object.entries(item)) {
      output[key] = value;
    }
  }
  return output;
}

const employees = [
  { id: 1, name: "Alice", role: "Developer", salary: 60000 },
  { id: 2, name: "Bob", role: "Designer", salary: 55000 },
  { id: 3, name: "Charlie", role: "Manager", salary: 75000 },
];
// console.log(toSingleObject(employees));

// Q7. Write a function removeDuplicates(arr)
function removeDuplicates(arr) {
  const newArr = [...new Set(arr)];
  console.log(newArr);

  console.log(
    arr.reduce((acc, current) => {
      if (acc.includes(current)) {
        return acc;
      } else {
        acc.push(current);
        return acc;
      }
    }, [])
  );
}
// removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 6]);

// Q8. checks if two strings are anagrams of each other.
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(isAnagram("danish", "nishad"));
