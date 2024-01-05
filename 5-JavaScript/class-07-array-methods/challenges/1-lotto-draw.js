// ⚠️ Desafio: Escreva uma lógica que soteie os números da loteria de 1 a 25
// Devem ser sorteados 15 números únicos aleatoriamente
// Apresente o resultado de forma ordenada

const lottoDraw = Array.from({ length: 25 }, (value, index) => index + 1)
  .sort(() => Math.random() - 0.5)
  .filter((value, index) => index < 15)
  .sort((a, b) => a - b)
  .join("-");

console.log(lottoDraw);
