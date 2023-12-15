// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

const weekDay = new Date().getDay(); // 0-6

switch (weekDay) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido!");
    break;
}

const option = prompt(`
  Digite a opção desejada:

  1: Consultoria
  2: Atendimento
  3: Encerar
`);

switch (option) {
  case "1":
    alert("Consultorias em finanças, vendas e markting");
    break;
  case "2":
    alert("Vamos passar para um de nossos atendentes!");
    break;
  case "3":
    alert("Obrigado pela sua visita, volte sempre!");
    break;
  case null:
    alert("Programa ecerrado!");
    break;
  default:
    alert("Digite uma opção válida!");
    break;
}
