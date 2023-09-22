// Crie uma função para calcular o fatorial de um número e imprima na tela

function calculateFactor(number) {
  if (number === 0 || number === 1) return 1;
  return number * calculateFactor(number - 1);
}

const userNum = Number(prompt("Digite um número oara calcular seu fatorial:"));

document.write(`O fatorial de ${userNum} é: ${calculateFactor(userNum)}`);
