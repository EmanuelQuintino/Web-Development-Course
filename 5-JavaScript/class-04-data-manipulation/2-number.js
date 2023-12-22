console.log(Number(""));
console.log(Number(" "));
console.log(Number("abc"));
console.log(typeof Number("abc"));
console.log(isNaN(Number("abc")));

console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined)); // not valid value

const num1 = 7.93467;
const num2 = -5249582749582489795578;

console.log(parseInt(num1));
console.log(parseInt(num2)); // limited
console.log(parseFloat(num2));

console.log(String(num1));

console.log(num1.toString(16)); // radix
console.log(parseInt("1010", 2));

console.log(String(num1).length);
console.log(String(num1).replace(".", "").length);

console.log(num1.toPrecision(3));
console.log(num1.toFixed(2));
console.log(num1.toExponential(1));
console.log((num1 + 2).valueOf());

// // International Standard Currency Code ISO 4217

console.log("R$ " + String(num1.toFixed(2)).replace(".", ","));

console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "brl" }));
console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "usd" }));
console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "eur" }));
console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "jpy" }));

// // Math Functions

console.log(Math.sqrt(81));
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(num1));

console.log(Math.max(2, 3));
console.log(Math.min(2, 3));

const numbers = [12, -34, 4, 98, 32, 56, 78, 12, 43];
console.log(...numbers);
console.log(Math.max(...numbers)); //spread
console.log(Math.min(...numbers));

console.log(Math.ceil(num1));
console.log(Math.round(num1));
console.log(Math.floor(num1));

console.log(Math.round(2.4)); // 0-4
console.log(Math.round(2.5)); // 5-9
console.log(Math.floor(2.9999));
console.log(Math.ceil(2.0001));

console.log(Math.round(Math.random() * 10)); // 0-10
console.log(Math.floor(Math.random() * 10)); // 0-9
console.log(Math.ceil(Math.random() * 10)); // 1-10
