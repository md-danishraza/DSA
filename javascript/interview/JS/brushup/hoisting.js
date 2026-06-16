var x = 10;

function test() {
  console.log(x);

  var x = 20;
}

test();

// undefined
// Because of hoisting.

// JS internally sees:

function test() {
  var x;
  console.log(x);
  x = 20;
}

function demo() {
  console.log(a); // undefined (var is hoisted + initialized)
  var a = 10;

  console.log(b); // ReferenceError (TDZ)
  let b = 20;

  console.log(c); // ReferenceError (TDZ)
  const c = 30;
}
demo();
// Technically, let and const are hoisted too — their declarations are moved to the top of the block.
// BUT they are not initialized at the start. They stay in the TDZ until the actual line of code where they are declared.
// Accessing them before that line throws a ReferenceError, instead of giving undefined like var.
