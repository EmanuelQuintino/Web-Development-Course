console.log(numArray.concat(real).sort((a, b) => a - b));

// Exercise
Array.from({ length: 25 }, (v, i) => i + 1)
  .sort(() => Math.random() - 0.5)
  .filter((v, i) => i < 15)
  .sort((a, b) => a - b);
