// >>>>>> EcmaScript (2015) - ES6 Modules <<<<<<<

// named import
// import { sum, sub, mul, div } from "./functions.js";
import { operations } from "./functions.js";

// console.log(sum(3, 2));
// console.log(sub(3, 2));
// console.log(mul(3, 2));
// console.log(div(3, 2));

// console.log(operations.sum(2, 4));
// console.log(operations.div(2, 4));

// //>>>>>>> Factory (Creational Design Pattern ) <<<<<<<<<<
function person(name, age) {
  return {
    name,
    age,
    canDrive: age >= 18,
    status: function status(canDrive) {
      if (this.canDrive) {
        return "Pode dirigir";
      } else {
        return "Não pode dirigir";
      }
    },
  };
}

const person2 = person("João", 17);
// console.log(person2.status());
// console.log(typeof person2);

//destructure
const array = ["A", "B"];
const [item1, item2] = array;
// console.log(item1)
// console.log(item2)

// rest
function showArray(array, ...itens) {
  // console.log(array);
  // console.log(itens);
}

showArray(array, "D", "E", "F");

// spread
const numbers = [1, 3, 42, 5, 87, 6];
// console.log(...numbers)
// console.log(Math.max(...numbers))

// const clone = numbers
// const clone = [...numbers]
// const [...clone] = numbers
// clone.pop()
// console.log(clone);
// console.log(numbers);

const listItens = document.querySelectorAll("div");
console.log(listItens);
// listItens.forEach(value => console.log(value))

//// let arrayListItens = Array.from(listItens)
// console.log(arrayListItens);
// arrayListItens.map(value => console.log(value))

// let arrayListItens = [...listItens]
// console.log(arrayListItens);
// arrayListItens.map(value => console.log(value));

// [...listItens].map(value => console.log(value));
// [...numbers].map(value => console.log(value));

// let number; number = 7
// console.log(number);

// ASI (Automatic Semicolon Insertion)

// Babel (ES6 to ES5)
// - Parser: Code to AST (Abstract Syntex Tree)
// - Transformer: AST Manipulates (JSON)
// - Generator: AST to Code
