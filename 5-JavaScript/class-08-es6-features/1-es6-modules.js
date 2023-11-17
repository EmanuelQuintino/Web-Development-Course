// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

// EcmaScript (2015) - ES6 Modules (import, export)

// named import
import { sum, sub, mul, div } from "./scripts/mathFunctions.js";
import { mathOperations } from "./scripts/mathFunctions.js";

console.log(sum(3, 2));
console.log(sub(3, 2));
console.log(mul(3, 2));
console.log(div(3, 2));

console.log(mathOperations.sum(2, 4));
console.log(mathOperations.div(2, 4));
