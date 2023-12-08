// Crie uma função que retorne o IMC do paciente
// A função deve receber os parâmetros de height e de weight;
// Escreva na tela o IMC do paciente

function calcIMC(height, weight) {
  const imc = weight / (height / 100) ** 2;
  return imc.toFixed(2);
}

console.log(calcIMC(185, 80));
