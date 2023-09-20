// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

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

const fruits = ["banana", "maçã", "Uva"];
delete fruits[1];
console.log(fruits);

// Ternary
test ? true : false;

console.log(n1 > n2 ? "Yes" : "No");

let avarege = 7;
console.log(avarege >= 7 ? "Aprovado" : "Reprovado");

// * Cuidado com valores Truthy e False onde o booleano é considerado obrigatório (condicionais e loops).

// Truthy               Falsy
// 1, 1.5, -1           0
// " ", "0", "false"    ""
// {}                   null
// []                   undefined
// Infinity, -Infinity  NaN

console.log(1 ? "yes" : "no");
console.log("" ? "yes" : "no");
console.log("0" ? "yes" : "no");
console.log({} ? "yes" : "no");
console.log(null ? "yes" : "no");
console.log(Infinity ? "yes" : "no");
