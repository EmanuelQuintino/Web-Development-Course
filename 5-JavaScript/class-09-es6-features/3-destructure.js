//destructure
const array = ["A", "B"];
const [item1, item2] = array;
console.log(item1);
console.log(item2);

// rest
function showArray(array, ...itens) {
  console.log(array);
  console.log(itens);
}

showArray(array, "D", "E", "F");

// spread
const numbers = [1, 3, 42, 5, 87, 6];
console.log(numbers);
console.log(...numbers);
console.log(Math.max(...numbers));

const clone = numbers;

// const clone = [...numbers];
// const [...clone] = numbers;

clone.pop();

console.log(clone);
console.log(numbers);

const listItens = document.querySelectorAll("div");

console.log(listItens);
listItens.forEach((value) => console.log(value));

const arrayListItens = [...listItens];

console.log(arrayListItens);
arrayListItens.map((value) => console.log(value));
[...listItens].map((value) => console.log(value));

// ASI (Automatic Semicolon Insertion)

// Babel (ES6 to ES5) involves three main steps
// - Parser: Map code to AST (Abstract Syntex Tree)
// - Transformer: AST manipulates (JSON)
// - Generator: AST to code
