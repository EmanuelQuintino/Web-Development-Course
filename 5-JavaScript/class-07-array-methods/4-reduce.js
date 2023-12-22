// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const array = [1, 2, 3, 4, 5];
console.log(array.reduce((prev, number) => prev + number, 10));

const arrayLetters = ["A", "A", "B", "C", "C", "C"];

const countLetters = arrayLetters.reduce((prev, letter) => {
  prev[letter] ? prev[letter]++ : (prev[letter] = 1);
  return prev;
}, {});

console.log(countLetters);
