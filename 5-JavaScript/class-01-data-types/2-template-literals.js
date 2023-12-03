// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

console.log("Emanuel");
console.log("Emanuel");
console.log(`Emanuel`);

console.log("I can't play outside");
console.log('Emanuel disse "Estudem JavaScript"');

let course = "Desenvolvimento Web";
console.log("Turma de " + course); // concatenation

let num1 = "10";
let num2 = 20;

num1 = Number(num1); // type conversion (typecasting)

console.log(num1 + num2);
console.log(10 + "20"); // type coersion
console.log(Number("10") + 20);
console.log(+"10" + 20);

// grouping operator
console.log("A soma é: " + num1 + num2);
console.log("A soma é: " + (num1 + num2));

// interpolation
console.log("A soma de " + num1 + " e de " + num2 + " é igual a " + (num1 + num2));

// template literals (strings)
const sumNumbers = num1 + num2;
console.log(`A soma de ${num1} e de ${num2} é igual a ${sumNumbers}`);
