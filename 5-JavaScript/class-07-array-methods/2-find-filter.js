// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const studants = [
  { id: 1, name: "João", average: 6, birth: 2005 },
  { id: 2, name: "Thiago", average: 6, birth: 2002 },
  { id: 3, name: "Jonas", average: 5, birth: 1998 },
  { id: 4, name: "Rosa", average: 9, birth: 2004 },
  { id: 5, name: "Amanda", average: 8, birth: 1992 },
  { id: 6, name: "Pedro", average: 7, birth: 1998 },
];

const currentYear = new Date().getFullYear();
console.log(currentYear);

console.log(studants.find((student) => student.id === 3));
console.log(studants.find((studant) => studant.name === "Amanda"));
console.log(studants.find((studant) => studant.average >= 7));

console.table(studants.filter((studant) => studant.average >= 7));
console.table(studants.filter((studant) => studant.birth >= 2000));
console.table(studants.filter((studant) => currentYear - studant.birth <= 18));
console.table(studants.filter((studant) => studant.name.includes("d")));
