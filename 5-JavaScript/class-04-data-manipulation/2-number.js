//  Number Manipulation

let num1 = 7.93467;
let num2 = -5;

console.log(num1);
console.log(parseInt(num1));
console.log(parseFloat(num2));
console.log(String(num1).length);
console.log(String(num1).replace(".", "").length);
console.log("R$ " + String(num1.toFixed(2)).replace(".", ","));

console.log(Number(num1.toFixed(2)));
console.log(Number(num1.toFixed(2).replace(".", ",")));
console.log(typeof num1.toFixed(2).replace(".", ","));

// International Standard Currency Code ISO 4217

console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "brl" }));
console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "usd" }));
console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "eur" }));
console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "jpy" }));

// Math Functions

console.log(Math.sqrt(81));
console.log(Math.PI);
console.log(Math.abs(num2));

const numbers = [12, 34, 4, 98, 32, 56, 178, 12, 43, 65];
console.log(Math.max(...numbers)); //spread
console.log(Math.min(...numbers));

console.log(Math.ceil(num1));
console.log(Math.round(num1));
console.log(Math.floor(num1));

console.log(Math.round(Math.random() * 10));
