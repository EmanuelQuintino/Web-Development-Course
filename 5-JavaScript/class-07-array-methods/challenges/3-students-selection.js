// Uma escola precisa selecionar os melhores alunos para estágio
// Use os métodos de Array para percorer lista de alunos e calcular médias
// O critério será por média >= 7 e as faltas menores que 5 para filtrar alunos

const students = [
  { name: "Aluno A", grades: [7, 7, 6], absences: 3 },
  { name: "Aluno B", grades: [6, 8], absences: 4 },
  { name: "Aluno C", grades: [9, 8, 10], absences: 6 },
  { name: "Aluno D", grades: [9], absences: 2 },
  { name: "Aluno E", grades: [8, 7, 5], absences: 7 },
];

const studentsAverage = students.map((student) => {
  const average =
    student.grades.reduce((prev, grade) => prev + grade, 0) / student.grades.length;

  return {
    name: student.name,
    average: average,
    absences: student.absences,
  };
});

const selectedStudents = studentsAverage.filter(
  (student) => student.average >= 7 && student.absences < 5
);

console.table(studentsAverage);
console.table(selectedStudents);
