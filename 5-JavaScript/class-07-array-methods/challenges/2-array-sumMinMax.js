// Faça uma função que receba um array de números
// Retorne um objeto com a soma dos 3 maiores e 3 menos números

function arraySumMaxMin(arrayNumbers) {
  const orderArray = arrayNumbers.sort((a, b) => a - b);
  const sumMax = orderArray.slice(-3).reduce((a, b) => a + b);
  const sumMin = orderArray.slice(0, 3).reduce((a, b) => a + b);
  return { sumMax, sumMin };
}

const arrayNumbers = [5, 4, 3, 2, 1];

console.log(arraySumMaxMin(arrayNumbers));
