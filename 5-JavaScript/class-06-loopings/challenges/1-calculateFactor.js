// Crie uma função para calcular o fatorial de um número
// Solicite o número ao usuário via prompt
// Escreva (write) na tela o resultado

function calculateFactor(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }

  return result;

  // if (number === 0 || number === 1) return 1;
  // return number * calculateFactor(number - 1);
}

const userNum = Number(prompt("Digite um número oara calcular seu fatorial:"));

document.write(`O fatorial de ${userNum} é: ${calculateFactor(userNum)}`);
