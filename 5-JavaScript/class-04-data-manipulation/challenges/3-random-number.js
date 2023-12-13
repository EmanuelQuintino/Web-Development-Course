// ⚠️ Desafio: Crie uma função capaz de retornar um número aleatório dentro de um intervalo determinado por parâmetros min(mínimo) e max(máximo).

function randomNumber(min, max) {
  const amount = max - min + 1;
  return Math.floor(Math.random() * amount + min);
}

console.log(randomNumber(2, 4));
