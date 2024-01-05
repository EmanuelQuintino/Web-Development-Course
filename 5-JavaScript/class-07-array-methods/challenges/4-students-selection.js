// ⚠️ Desafio: Uma escola precisa selecionar os melhores alunos para estágio
// Use os métodos de Array para filtrar lista de alunos
// O critério será por média >= 7 e as faltas menores que 5

const students = [
  { name: "Aluno A", grades: [7, 7, 6], absences: 3 },
  { name: "Aluno B", grades: [6, 8], absences: 4 },
  { name: "Aluno C", grades: [7, 8, 10], absences: 6 },
  { name: "Aluno D", grades: [9], absences: 2 },
  { name: "Aluno E", grades: [8, 7, 5], absences: 7 },
];

const selectedStudents = students.filter((student) => {
  const sumGrades = student.grades.reduce((a, b) => a + b, 0);
  const average = sumGrades / student.grades.length;

  console.log(average);

  return average >= 7 && student.absences < 5;
});

console.table(selectedStudents);
