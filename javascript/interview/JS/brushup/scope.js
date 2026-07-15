// Scope determines where variables can be accessed.

// JavaScript has mainly:

// Global scope
// Function scope
// Block scope (let, const)

function test() {
  var age = 22;
}

console.log(age);

// ReferenceError: age is not defined
// var is function scoped.
if (true) {
  var a = 5;
}

console.log(a);
// output = 5
// Because var ignores block scope.

if (true) {
  let a = 5;
}
console.log(a);
// ReferenceError
