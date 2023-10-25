// Faça uma função que receba um array de números
// Retorne um objeto com a soma dos 3 maiores e 3 menos números

function sumMaxMin(arrayNumbers) {
  const orderArrayNumbers = arrayNumbers.sort((a, b) => a - b);
  const sumMax = orderArrayNumbers.slice(-3).reduce((a, b) => a + b);
  const sumMin = orderArrayNumbers.slice(0, 3).reduce((a, b) => a + b);
  return console.log(sumMax, sumMin);
}

const arrayNumbers1 = [5, 4, 3, 2, 1];
const arrayNumbers2 = [12, 45, 23, 9, 102, 3];

sumMaxMin(arrayNumbers2);
