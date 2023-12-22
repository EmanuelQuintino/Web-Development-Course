// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// sum
const array = [1, 2, 3, 4, 5];
console.log(array.reduce((prev, number) => prev + number, 10));

// categories
const fruits = ["maçã", "banana", "maçã", "laranja", "banana", "morango"];

const countByFruits = fruits.reduce((prev, fruit) => {
  prev[fruit] = (prev[fruit] || 0) + 1;
  return prev;
}, {});

console.log(countByFruits);
