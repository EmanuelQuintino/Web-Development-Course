// ⚠️ Desafio: Crie uma função que reproduza a sequencia de Fibonacci
// Passe como argumento quantos números deseja reproduzir

function fibonacciSequence(amount) {
  if (amount <= 0) return null;
  if (amount === 1) return 0;

  const array = [0, 1];

  for (let i = 2; i < amount; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array;
}

const userAmount = Number(prompt("Digite quantos números de Fibonacci deseja imprimir:"));
const resultFibonacciSequence = fibonacciSequence(userAmount);

document.write(resultFibonacciSequence);
