// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// immutable ⭐
const filteredNumbers = numbers.filter((value) => value < 5);

console.log(numbers);
console.log(filteredNumbers);

const students = [
  { id: 1, name: "João", average: 6, birth: 2005 },
  { id: 2, name: "Thiago", average: 6, birth: 2002 },
  { id: 3, name: "Jonas", average: 5, birth: 1998 },
  { id: 4, name: "Rosa", average: 9, birth: 2004 },
  { id: 5, name: "Amanda", average: 8, birth: 1992 },
  { id: 6, name: "Pedro", average: 7, birth: 1998 },
  { id: 7, name: "Pedro", average: 6, birth: 2000 },
  { id: 8, name: "Dudu", average: 8, birth: 2007 },
  { id: 9, name: "Nathan", average: 10, birth: 2006 },
];

console.table(students.filter((student) => student.average >= 7));

console.log(students);

const currentYear = new Date().getFullYear();
console.log(currentYear);

console.table(students.filter((student) => student.birth >= 2000));
console.table(students.filter((student) => currentYear - student.birth <= 18));
console.table(students.filter((student) => student.name.includes("d")));

const userName = prompt("Digite o nome:");
console.log(students.filter((student) => student.name.includes(userName)));
