// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const array = Array(1, "a", () => "A", [], { name: "array" });

console.log(array);
console.log(array.length);
console.log(array[1]);
console.log(array[2]());
console.log(array[4].name);

console.log(array.join("_"));

console.log(array.includes("a"));
console.log("A" == "a");

console.log(array.indexOf("A")); // -1 not exist
const sliceNewArray = array.slice(1, -3); // new array
console.log(sliceNewArray);
console.log(array);

const spliceNewArray = array.splice(-2, 2); // modify
array.splice(1, 0, "insert");

console.log(spliceNewArray);
console.log(array);

const myName = "Emanuel";

console.log(myName.split(""));
console.log(myName.split("").reverse().join(""));

const techs = ["HTML", "CSS", "Git"];

// LIFO
techs.push("JavaScript");
console.log(techs);

techs.pop();
console.log(techs);

const removeElementEnd = techs.pop();
console.log(`${removeElementEnd} foi removido do final!`);

// FIFO
techs.unshift("SQL");
console.log(techs);

techs.shift();
console.log(techs);

const removeElementStart = techs.shift();
console.log(`${removeElementStart} foi removido do início!`);
console.log(techs);

//destructure
const letters = ["A", "B", "C"];
const [item1, item2, ...rest] = letters;
console.log(item1);
console.log(item2);
console.log(rest);
console.log(...rest);

// rest
function showArray(array, ...itens) {
  console.log(array);
  console.log(itens);
}

showArray(letters, "D", "E", "F");

// spread
const numbers = [4, 1, 3, 3, 4, 2, 5, 8, 6];
console.log(numbers);
console.log(...numbers);
console.log(Math.max(...numbers));

const setRemovedDuplicates = new Set(numbers);
const arrayRemovedDuplicates = [...setRemovedDuplicates];
console.log(arrayRemovedDuplicates);

// value
let num1 = 1;
let num2 = num1;

num1++;
num2--;

console.log({ num1, num2 });

// reference
const numbers1 = [1, 2, 3];
const numbers2 = numbers1;

const clone = [...numbers1]; // spread
// const [...clone] = numbers1; // rest

numbers1.pop();

console.log({ numbers1, numbers2 });
console.log(clone);

console.log(letters + techs);
console.log(letters.concat(techs));

// flattening
const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const singleArray = [].concat(...nestedArrays);

console.log(singleArray);
