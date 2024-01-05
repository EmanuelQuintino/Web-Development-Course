// ⚠️ Desafio: Crie uma função para calcular o fatorial de um número
// Passe o número via argumento e use um FOR para operação

function calculateFactor(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;

  // if (number === 0 || number === 1) return 1;
  // return number * calculateFactor(number - 1);
}

console.log(calculateFactor(5));
