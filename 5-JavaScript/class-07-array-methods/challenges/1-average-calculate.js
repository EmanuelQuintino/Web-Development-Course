// Use os métodos do array e calcule a média dos alunos
// Crie um novo array com cada aluno contendo "name" e "average"

const students = [
  { name: "Aluno A", grades: [7, 8, 9] },
  { name: "Aluno B", grades: [6, 8, 7] },
  { name: "Aluno C", grades: [9, 8, 10] },
];

const studentsAverage = students.map((student) => {
  const studentAverage =
    student.grades.reduce((prev, grade) => prev + grade, 0) / student.grades.length;

  return {
    name: student.name,
    average: studentAverage,
  };
});

console.table(studentsAverage);
