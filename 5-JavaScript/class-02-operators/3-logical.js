// Logical Operators (Boolean)

const email = true;
const password = true;

console.log(email && password);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Go to Walt Disney?

const creditCard = true;
const hasCredit = true;
const pix = true;

console.log("Viagem: " + (creditCard && hasCredit && true));

console.log(creditCard || pix);
console.log((creditCard && hasCredit) || pix);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!!creditCard);
