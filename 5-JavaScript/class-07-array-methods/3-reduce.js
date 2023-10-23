// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const arrayNumbers = [2, 4, 7, 2, 3, 5];

const sumNumbers = arrayNumbers.reduce((a, b) => a + b, 0);
console.log(sumNumbers);

let initial = 200;

const shoppingCart = [
  { product: "Arroz", quantity: 2, price: 10 },
  { product: "Feijão", quantity: 3, price: 20 },
  { product: "Açúcar", quantity: 4, price: 30 },
];

const sumShoppingCart = shoppingCart.reduce((prevValue, currentValue) => {
  return prevValue + currentValue.quantity * currentValue.price;
}, 0);

console.log(sumShoppingCart);
