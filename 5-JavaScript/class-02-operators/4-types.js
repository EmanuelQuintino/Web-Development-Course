// Type Operators

// Binary
let n1 = 8;
let n2 = 7;
console.log(n1 / n2);
console.log("Test " + n2);

// Unary
n1++;
console.log(n1++);
console.log(n1);
console.log(++n1);
console.log(typeof n2);
console.log(typeof +"1");

const fruits = ["banana", "maçã", "uva"];
delete fruits[1];
console.log(fruits);

// Ternary
// test ? true : false;

console.log(2 > 3 ? "Sim" : "Não");

const number = "qwe70";
console.log(number % 2 == 0 ? "Par" : number % 2 == 1 ? "Ímpar" : "Inválido");

// Truthy and Falsy

console.log(-1 ? "true" : "false");
console.log("" ? "true" : "false");
console.log("0" ? "true" : "false");
console.log({} ? "true" : "false");
console.log(null ? "true" : "false");
console.log(-Infinity ? "true" : "false");

// Logical and Nullish Coalescing Operator

console.log(true && "right-hand");
console.log(false && "right-hand");

console.log("Emanuel" && "right-hand");
console.log("" && "right-hand");

console.log(true || "right-hand");
console.log(false || "right-hand");

console.log("Emanuel" || "right-hand");
console.log("" || "right-hand");

console.log(1 || "right-hand");
console.log(0 || "right-hand");

console.log(false ?? "right-hand");
console.log("" ?? "right-hand");
console.log(0 ?? "right-hand");

console.log(null ?? "right-hand");
console.log(undefined ?? "right-hand");
