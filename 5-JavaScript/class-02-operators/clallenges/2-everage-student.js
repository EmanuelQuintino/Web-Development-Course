// ⚠️ Desafio:Construa uma lógica receba as notas 1 e 2 do estudante e imprima na tela (alert) sua média e diga sua situação. A média da escola é 7 para aprovação

const grade1 = Number(prompt("Digite a primeira nota:"));
const grade2 = Number(prompt("Digite a segunda nota:"));

const studentAverage = (grade1 + grade2) / 2;
const situation = studentAverage >= 7 ? "aprovado" : "reprovado";

window.alert(`Média ${studentAverage} e está ${situation}!`);
