// They represent a value that will be available in the future.

// A Promise has three states:

// Pending
//   |
//   |--- resolve()
//   |        |
//   |    Fulfilled
//   |
//   |--- reject()
//            |
//        Rejected

// Creating a Promise
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Error");
  }
});
// Consuming Promises
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   Async/Await
async function getData() {
  try {
    const result = await promise;

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getData();

//   Promise.all (Frequently asked)
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.all([p1, p2]).then(console.log);

//   Output:

[1, 2];

//   It fails immediately if any promise rejects.

// Method	Behavior
// Promise.all	Waits for all, fails on first rejection
// Promise.allSettled	Waits for all, never fails
// Promise.race	First promise to settle wins
// Promise.any	First fulfilled promise wins
