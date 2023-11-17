// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop

// Call Stack
console.log(1);

// Microtask
queueMicrotask(() => {
  console.log(2);
});

// Tasks
setTimeout(() => {
  console.log(3);
}, 2000);

// Call Stack
for (let index = 0; index < 200000; index++) {
  console.log(index);
}

// Microtask
Promise.resolve().then(() => {
  console.log(4);
});

function sum(a, b) {
  queueMicrotask(() => {
    console.log(6);
  });
  return a + b;
}

// Call Stack
console.log(sum(2, 3));
