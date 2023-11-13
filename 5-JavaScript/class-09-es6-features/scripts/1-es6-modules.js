// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

// Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

// EcmaScript (2015) - ES6 Modules

// named import
import { sum, sub, mul, div } from "./functions.js";
import { mathOperations } from "./functions.js";

console.log(sum(3, 2));
console.log(sub(3, 2));
console.log(mul(3, 2));
console.log(div(3, 2));

console.log(mathOperations.sum(2, 4));
console.log(mathOperations.div(2, 4));
