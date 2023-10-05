// Crie uma função que reproduza a sequencia de Fibonacci
// Passe como argumento quantos números deseja reproduzir

function fibonacciSequence(amount) {
  if (amount <= 0) return null;
  if (amount === 1) return 0;

  let array = [0, 1];

  for (let i = 2; i < amount; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array;
}

document.write(fibonacciSequence(10));
