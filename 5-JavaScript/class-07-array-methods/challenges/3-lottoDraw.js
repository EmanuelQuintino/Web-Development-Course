// Escreva uma lógica que soteie os números da loteria
// Os números devem ir de 1 a 25 e sortear aleatoriamente 15 deles
// Apresente o resultado de forma ordenada

const lottoDraw = Array.from({ length: 25 }, (v, i) => i + 1)
  .sort(() => Math.random() - 0.5)
  .filter((v, i) => i < 15)
  .sort((a, b) => a - b);

console.log(lottoDraw.join("-"));
