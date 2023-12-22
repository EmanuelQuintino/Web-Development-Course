// Crie um formulário com inputs que receba duas datas
// Faça um algoritmo que receba o número de dias entre elas
// Use um botão para chamar a função e valide se tem campo de data sem preencher

const initialDate = document.querySelector("#initialDate");
const finalDate = document.querySelector("#finalDate");
const resultButton = document.querySelector("#resultButton");
const resultDiff = document.querySelector("#resultDiff");

resultButton.addEventListener("click", () => {
  let date1 = new Date(initialDate.value);
  let date2 = new Date(finalDate.value);

  if (date1 == "Invalid Date" || date2 == "Invalid Date") {
    alert("Preencha todas as datas!");
  } else {
    resultDiff.innerHTML = `${Math.abs(date1 - date2) / 1000 / 60 / 60 / 24} dia(s)`;
  }
});
