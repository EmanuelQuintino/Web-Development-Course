// ⚠️ Desafio: Faça um sistema de login que receba o email e senha do usuário
// Verifique SE está correto e apresente mensagem de sucesso ou erro
// Após 3 tentativas seguidas sem sucesso a sessão deve ser encerrada

const userName = "reprogramajucas";
const userPassword = "123";
let countdownErrors = 3;

while (true) {
  const user = prompt("Usuário: ");
  const password = prompt("Senha: ");

  if (user == userName && password == userPassword) {
    alert("Login realizado com sucesso!");
    break;
  } else {
    countdownErrors--;
    if (countdownErrors == 0) {
      alert("Email ou Senha incorreta. Sessão encerrada!");
      break;
    }
    alert(`Email ou Senha incorreta. Restam ${countdownErrors} tentativa(s)!`);
  }
}
