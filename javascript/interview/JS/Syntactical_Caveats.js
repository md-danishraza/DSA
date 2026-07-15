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
// console.log(isAnagram("danish", "nishad"));

// Q9. create a private variable using a JavaScript function?
function privateVar() {
  // private var
  let count = 0;
  return {
    getCount: () => {
      return count;
    },
    increment: () => {
      return (count += 1);
    },
  };
}
const count = privateVar();
// console.log(count.increment());
// console.log(count.getCount());

// Q10. Write a function that takes an obj and a key, and returns the value of that key.
function getValue(obj, key) {
  if (typeof obj == "object" && obj) {
    if (obj[key]) {
      return obj[key];
    } else {
      return "no value exist";
    }
  }
}

// console.log(getValue({ name: "bob" }, "name"));

// Q11. Copying Objects
function copyObjectDeep(obj) {
  // shallow copy
  // - Object.assign({},obj);
  // - {...onj}

  // deep copy
  //  - structuredClone(obj)
  //  - JSON.parse(JSON.stringify(obj));

  // using recursion
  const copied = deepCopyRec(obj);
  console.log(copied);
}
function deepCopyRec(obj) {
  // base case
  // if primitive then return
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // if obj is array
  if (Array.isArray(obj)) {
    // recurively iterate each items
    return obj.map(deepCopyRec);
  }

  // if object exist create copy
  const copy = {};
  for (let key in obj) {
    // is direct key and not inherited one from prototype
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopyRec(obj[key]);
    }
  }
  // return this recursion fn level copy object
  return copy;
}
// copyObjectDeep(employees);

// Q12. Write a function that can be used to merge an original array with a new array while avoiding duplicate elements.
function mergeArr(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}
// console.log(mergeArr([1, 2, 3, 4], [1, 2, 3, 4, 4, 5, 6, 7]));

// Q12. sort array
function sortArr(arr, order = 0) {
  // desc
  if (order === 0) {
    return arr.sort((a, b) => b - a);
  }
  // asc
  if (order === 1) {
    return arr.sort((a, b) => a - b);
  }
}
// console.log(sortArr([3, 2, 1, 4, 56], 1));

// Currying is a functional programming technique where a function with multiple arguments is
// transformed into a sequence of functions, each taking a single argument. In JavaScript, this
// is often used to create reusable, partially applied functions.

// Normal function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(curriedAdd(1)(2)(3));

// Q13. function to memoize
function memoize(fn) {
  const cache = new Map();

  // taking all arguments using rest params
  return function (...args) {
    const key = JSON.stringify(args); // serialize arguments as key
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
// A slow function
function slowFib(n) {
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
}

// Memoized version
const memoizedFib = memoize(slowFib);

// console.log(memoizedFib(40));
// console.log(memoizedFib(40)); // instantly returns cached result

// Q14. function to flatten nd array using stack
function flatten(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length > 0) {
    const next = stack.pop(); // taking from end

    if (Array.isArray(next)) {
      // push its elements back onto stack
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  // reversing to restore order (for LIFO)
  return result.reverse();
}

// Q15. debounce and throttle
function debounce(fn, delay) {
  // to persist across calls
  let timers;
  return (...args) => {
    // clearing previous timer first
    clearTimeout(timers);
    // calling the fn
    timers = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
const dbex = debounce((query) => {
  console.log("Searching for:", query);
}, 500);
dbex("testing");

function throttle(fn, interval) {
  let lastTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime > interval) {
      fn(...args);
    }
    // update the lasttime
    lastTime = now;
  };
}

// eg logging scroll position once every 200ms
// const handleScroll = throttle(() => {
//   console.log("Scroll position:", window.scrollY);
// }, 200);
