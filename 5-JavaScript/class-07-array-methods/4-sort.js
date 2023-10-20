// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const numArray = [2, "2", 2, 1, 5, 19, 10, 20];

// Table ASCII (0-9, A-Z, a-z)
console.log(numArray.sort((a, b) => a - b));

console.table(averageStudants.sort((a, b) => b.average - a.average));

console.table(
  averageStudants.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })
);

// Exercise
Array.from({ length: 25 }, (v, i) => i + 1)
  .sort(() => Math.random() - 0.5)
  .filter((v, i) => i < 15)
  .sort((a, b) => a - b);
