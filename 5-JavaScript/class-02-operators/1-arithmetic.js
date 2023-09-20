// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Arithmetic Operators

// addition ( + )
// subtraction ( - )
// multiplication ( * )
// division ( / )
// remainder ( % )
// exponentiation ( ** ) to square root use " ** 1/2 "
// increment ( ++ )
// decrement ( -- )

let num1 = "2";
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(16 ** (1 / 2));
console.log(Math.sqrt(16));
console.log(Math.cbrt(8));

console.log(num1++);
console.log(--num1);
console.log(++num1 + num2);

// Assignment (Atribuição)

num1 = num1 + 2;

num1 += 2;
num1 -= 2;
num1 *= 2;
num1 /= 2;
num1 %= 2;
num1 **= 2;

console.log(num1);
