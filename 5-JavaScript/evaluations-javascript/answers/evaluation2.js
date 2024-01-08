// Question 1 (variables)

// let 123variable;
// let my-variable;
// let my variable;
// let my#variable;
// let if;
// let break;

// Question (data types)
console.log(10 == "10");

// Question 2 (data types)
console.log(2 + +"3");
// a) error
// b) 5
// c) 23
// d) N.R.A

// Question 3 (data types)
console.log(2 / 0);

// a) error
// b) infinity
// c) 2
// d) N.R.A

// Question 4 (scope variebles)

console.log(num);

{
  var num = 2;
}

console.log(num);

// a) undefined, 2
// b) undefined, undefined
// c) error
// d) N.R.A

// Question 5 data Manipulation
myName[1] = "T";
console.log(myName); // string immutable *

// Question 5 (array)

const filmList = ["Matrix", "Interestellar", "Shrek", "Get Out", "Split"];

// a) console.log(filmList[1]);
// b) console.log(filmList[2]);
// c) console.log(filmList[3]);
// d) N.R.A

// Question 6 (operators)

let num1 = 2;

console.log(num1++);
console.log(++num1);
console.log(num1++ + 3);
console.log(num1);

// a) 2, 4, 7, 5
// b) 2, 4, 8, 8
// c) 3, 4, 8, 8
// d) error

// revert string
console.log("revert string".split("").reverse().join(""));

// count numbers
const num = 7.1356231304987145;
console.log(String(num).replace(".", "").length);

// max numbers
const numbers = [12, 34, 4, 98, 32, 56, 178, 12, 43, 65];
console.log(Math.max(...numbers)); //spread

// duplicates
const array = ["A", "A", "B", "B"];
const arrayRemovedDuplicates = [...new Set(array)];
console.log(arrayRemovedDuplicates);

// flattening
const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const singleArray = [].concat(...nestedArrays);

console.log(singleArray);

// count category
const arrayLetters = ["A", "A", "B", "C", "C", "C"];

const countLetters = arrayLetters.reduce((prev, letter) => {
  prev[letter] ? prev[letter]++ : (prev[letter] = 1);
  return prev;
}, {});

console.log(countLetters);
