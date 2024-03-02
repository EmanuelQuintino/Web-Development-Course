// ⚠️ Desafio: Crie uma função que verifique SE um número é primo e imprima na tela

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

if (isPrime(7)) {
  console.log("Número primo!");
} else {
  console.log("Número não primo!");
}
