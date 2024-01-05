// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const array = [1, 2, 3, 4, 5];
console.log(array.reduce((a, b) => a + b, 100));
console.log(array.reduce((a, b) => a * b, 100));

const students = [
  { id: 1, name: "Emanuel", salary: 8000 },
  { id: 2, name: "Maikel", salary: 9000 },
  { id: 3, name: "Luiza", salary: 8000 },
  { id: 4, name: "Natanael", salary: 7000 },
];

console.log(students.reduce((a, b) => a + b.salary, 0));

const arrayLetters = ["A", "A", "B", "C", "C", "C"];

const countLetters = arrayLetters.reduce((prev, letter) => {
  prev[letter] ? prev[letter]++ : (prev[letter] = 1);
  return prev;
}, {});

console.log(countLetters);
