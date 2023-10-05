// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Type Operators

// Binary
let n1 = 8;
let n2 = 7;
console.log(n1 + n2);
console.log("Test " + n2);

// Unary
n1++;
console.log(n1++);
console.log(n1);
console.log(++n1);
console.log(typeof n2);

const fruits = ["banana", "maçã", "uva"];
delete fruits[1];
console.log(fruits);

// Ternary
// test ? true : false;

console.log(n1 > n2 ? "true" : "false");

let average = 7;
console.log(average >= 7 ? "aprovado" : "reprovado");

// Be careful with Truthy and Falsy values where Boolean is considered mandatory (conditionals and loops).

// Truthy               Falsy
// 1, 1.5, -1           0
// " ", "0", "false"    ""
// {}                   null
// []                   undefined
// Infinity, -Infinity  NaN

console.log(-1 ? "true" : "false");
console.log("" ? "true" : "false");
console.log("0" ? "true" : "false");
console.log({} ? "true" : "false");
console.log(null ? "true" : "false");
console.log(-Infinity ? "true" : "false");
