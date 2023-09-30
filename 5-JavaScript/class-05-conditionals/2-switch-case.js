let weekDay = 9;

switch (weekDay) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
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
