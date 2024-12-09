// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// let 123variable;
// let my-variable;
// let my variable;
// let my#variable;
// let if;
// let break;

let studentName = "Emanuel"; // string
let age = 30; // number
const cpf = "123.123.123-12"; // string
let isAdmin = true; // boolean

studentName = "Emanuel Quintino";
// cpf = "123";

console.log(studentName);
console.log(age);
console.log(cpf);
console.log(isAdmin);

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof cpf);
console.log(typeof isAdmin);

// Number: integer, float, NaN, Infinity
console.log(typeof 32);
console.log(typeof 32.5);
console.log(typeof (32 + 5));
console.log(typeof 15 + "Emanuel");

console.log(typeof NaN);
console.log(typeof Number("Emanuel"));

console.log(typeof Infinity);
console.log(2 / 0);

// Truthy and Falsy
console.log(Boolean("String"));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(undefined));
console.log(Boolean(null));
