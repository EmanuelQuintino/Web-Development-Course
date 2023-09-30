//Switch: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

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

let option = window.prompt(`
    Digite a opção desejada:

    1: Consultoria
    2: Atendimento
    3: Encerar`);

switch (option) {
  case "1":
    window.alert(`
        Consultorias em:

        - Finanças
        - Vendas
        - Markting`);
    break;
  case "2":
    window.alert("Vamos passar para um de nossos atendentes!");
    break;
  case "3":
    window.alert("Obrigado pela sua visita, volte sempre!");
    break;
  case null:
    window.alert("Programa ecerrado!");
    break;
  default:
    window.alert("Digite uma opção válida!");
    break;
}
