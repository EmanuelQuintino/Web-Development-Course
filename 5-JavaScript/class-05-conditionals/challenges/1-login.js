// ⚠️ Desafio: Faça um sistema de login que receba o email e senha do usuário via prompt e verifique SE está correto. Apresente mensagem de sucesso ou erro.

const userName = "reprogramajucas";
const userPassword = 123;

const user = prompt("Usuário: ");
const password = prompt("Senha: ");

if (user == userName && password == userPassword) {
  alert("Login realizado com sucesso!");
} else {
  alert("Email ou Senha incorretos!");
}
