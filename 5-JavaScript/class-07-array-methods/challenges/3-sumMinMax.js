// ⚠️ Desafio: Faça uma lógica para somar os 3 maiores e 3 menos números de um array

const numbers = [5, 4, 3, 2, 1];

numbers.sort((a, b) => a - b);

// const sumMin = numbers.slice(0, 3).reduce((a, b) => a + b);
// const sumMax = numbers.slice(-3).reduce((a, b) => a + b);

const sumMin = numbers.filter((_, index) => index < 3).reduce((a, b) => a + b);
const sumMax = numbers.filter((_, index) => index >= numbers.length - 3);

console.log({ sumMin, sumMax });
