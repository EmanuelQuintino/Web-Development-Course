// Crie uma função que calcule o IMC do usuário
// A função deve receber os parâmetros de height e de weight;
// Escreva na tela o IMC e se está bom ou rium seguindo a tabela

function calcIMC(height, weight) {
  const imc = weight / (height / 100) ** 2;
  return imc.toFixed(2);
}

console.log(calcIMC(185, 80));
