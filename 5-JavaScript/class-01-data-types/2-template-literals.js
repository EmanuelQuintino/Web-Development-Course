// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let num1 = "10";
let num2 = 20;

num1 = Number(num1); // Type Conversion (Typecasting)
// Number() (função construtora para converter um dado em número)

console.log(num1 + num2); // Type Coersion

let addition = num1 + num2;

// Concatenation (grouping operator)
console.log("A soma é: " + num1 + num2);
console.log("A soma é: " + (num1 + num2));

// Interpolation
console.log("A soma de " + num1 + " e de " + num2 + " é igual a " + (num1 + num2));

// Template Literals (Strings)
console.log(`A soma de ${num1} e de ${num2} é igual a ${addition}`);
