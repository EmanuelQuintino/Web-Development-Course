// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Logical Operators (Boolean)

// and  &&
// or   ||
// not  !

//Go to Walt Disney?

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

let creditCard = true;
let hasCredit = true;

console.log(!true);
console.log(!!creditCard);

console.log("Viagem: " + (creditCard && hasCredit && true));

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let saveMoney = true;
let getLoan = true;

console.log(saveMoney || getLoan);
