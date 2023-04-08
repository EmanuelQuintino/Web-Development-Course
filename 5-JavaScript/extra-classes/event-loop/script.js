// Call Stack
console.log(1);

// Call Stack
// for (let index = 0; index < 200000; index++) {
//   console.log(index);
// }  

// Microtask
queueMicrotask(() => {
  console.log(2);
});

// Tasks
setTimeout(() => {
  console.log(3);
}, 2000);

// Microtask
Promise.resolve(true).then(() => {
  console.log(4);
});

function sum(a, b) {
  queueMicrotask(() => {
    console.log(6);
  })
  return a + b;
}

// Call Stack
console.log(sum(2, 3));