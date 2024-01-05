// ⚠️ Desafio: Crie uma função que verifique se um número é primo
// Receba o número do usuário enquanto ele não cancelar
// Valide não numérico e vazio para usuário inserir um número

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

while (true) {
  const userNumber = prompt("Digite um número para verificar se ele é primo:");

  if (userNumber === null) {
    break;
  }

  if (userNumber === "") {
    alert("Campo vazio! Por favor insira um número.");
    continue;
  }

  if (isNaN(Number(userNumber))) {
    alert("Não numérico! Por favor insira um número.");
    continue;
  }

  if (isPrime(userNumber)) {
    alert("Número primo!");
  } else {
    alert("Número não primo!");
  }
}
