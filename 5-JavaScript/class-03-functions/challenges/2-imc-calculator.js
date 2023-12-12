// ⚠️ Desafio: Crie uma função que receba os parâmetros height, weight e calcule o IMC do usuário. Escreva na tela o IMC e se está bom ou rium seguindo a tabela

function calcIMC(height, weight) {
  const imc = weight / (height / 100) ** 2;
  return imc.toFixed(2);
}

console.log(calcIMC(185, 80));
