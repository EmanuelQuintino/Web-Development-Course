// Faça um input que capture o CPF do usuário com formatação "000.000.000-00"
// Valide o campo para receber somente números
// Envie o CPF com botão caso esteja completo e apresente mensagem de sucesso
// Se o CPF não estiver completo apresente mensagem de atenção para o preenchimento.

const cpf = document.querySelector("#cpf");
const buttonSubmit = document.querySelector("#buttonSubmit");

cpf.addEventListener("keypress", (event) => {
  console.log(event.keyCode);

  if (event.keyCode < 48 || event.keyCode > 57) {
    event.preventDefault();
  }

  cpf.value.length == 3 ? (cpf.value += ".") : cpf.value;
  cpf.value.length == 7 ? (cpf.value += ".") : cpf.value;
  cpf.value.length == 11 ? (cpf.value += "-") : cpf.value;
});

buttonSubmit.addEventListener("click", () => {
  if (cpf.value.length < 14) {
    window.alert(`Atenção! Preencha seu CPF completo.`);
  } else {
    window.alert(`CPF ${cpf.value} cadastrado com sucesso!`);
  }
});
