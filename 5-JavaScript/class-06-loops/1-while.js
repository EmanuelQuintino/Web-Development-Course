// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

let count = 1; //flag
while (count <= 10) {
  if (count > 2 && count < 8) {
    count++;
    continue;
    // break;
  }

  console.log(count);
  count++; // container
}

console.log("Programa encerrado!");

let resp;
while (true) {
  resp = prompt("Deseja encerrar?");

  if (resp) {
    alert("Obrigado pela sua visita!");
    break;
  }
}

do {
  resp = prompt("Deseja sair?");
} while (resp);
