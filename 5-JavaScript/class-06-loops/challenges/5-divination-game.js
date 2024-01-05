// ⚠️ Desafio: Crie um jogo que adivinhe um número de 1 a 10
// O jogo encerra quando acertar o número e apresenta quantas tentativas levou
// O programa deve ser encerrado caso o usuário clique em cancelar

const randomNumber = Math.ceil(Math.random() * 10);
let countTry = 1;

while (true) {
  const userGuessNumber = prompt(`Adivinhe um número de 1 a 10:`);

  if (userGuessNumber == null) {
    alert(`Programa encerrado!`);
    break;
  }

  if (userGuessNumber == "") {
    alert("Campo vazio! Insira um número de 1 a 10.");
    continue;
  }

  if (isNaN(userGuessNumber)) {
    alert("Tipo não numérico! Insira um número de 1 a 10.");
  }

  if (userGuessNumber > 10 || userGuessNumber < 1) {
    alert("Atenção, número fora do intervalo de 1 a 10!");
  }

  if (Number(userGuessNumber) === randomNumber) {
    alert(`Parabêns! Acertou o número ${randomNumber} em ${countTry} tentativa(s)!`);
    break;
  }

  countTry++;
}
