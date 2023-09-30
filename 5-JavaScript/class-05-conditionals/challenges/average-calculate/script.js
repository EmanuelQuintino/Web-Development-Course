// Crie uma função para calcular média do aluno
// A média da escola é 7 e ela realiza duas provas
// Apresente a média e a situação se aprovado ou reprovado

function studentAverage(grade1, grade2) {
  return (grade1 + grade2) / 2;
}

const grade1 = Number(prompt("Nota 1: "));
const grade2 = Number(prompt("Nota 2: "));

const average = studentAverage(grade1, grade2);

if (average >= 7) {
  alert(`O aluno teve média de ${average} e foi aprovado`);
} else {
  alert(`O aluno teve média de ${average} e foi reprovado`);
}
