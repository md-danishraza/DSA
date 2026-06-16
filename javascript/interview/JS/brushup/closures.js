// A closure is a function that remembers variables from its lexical scope even after the outer function has finished executing.

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const increment = outer();

increment();
increment();
increment();

// 1
// 2
// 3

function createBankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance());

// balance cannot be accessed directly.
