// JavaScript is single-threaded

// There is only one call stack.

// But asynchronous operations are handled using:

// Call Stack
//      |
//      ↓
// Web APIs / Node APIs
//      |
//      ↓
// Callback Queue / Microtask Queue
//      |
//      ↓
// Event Loop

// Example 1
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// A
// C
// B

// Because setTimeout callback goes to the callback queue.

// Microtasks have higher priority
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output:

// Start
// End
// Promise
// Timeout

// Order:

// Call Stack
// ↓
// Microtasks (Promise)
// ↓
// Macrotasks(setTimeout);
