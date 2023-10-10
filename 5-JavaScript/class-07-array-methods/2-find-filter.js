const averageStudants = [
  { id: 1, name: "João", average: 4, birth: 1990 },
  { id: 2, name: "Thiago", average: 6, birth: 2002 },
  { id: 3, name: "Jonas", average: 5, birth: 1998 },
  { id: 4, name: "Rosa", average: 9, birth: 2004 },
  { id: 5, name: "Amanda", average: 8, birth: 1992 },
  { id: 6, name: "Pedro", average: 7, birth: 1993 },
];

console.log(averageStudants.find((studant) => yearCurrent - studant.birth >= 30));
console.log(
  averageStudants.find((studant) => studant.name.toLocaleLowerCase() == "amanda")
);
console.log(averageStudants.find((studant) => studant.id == 5));

console.log(real.filter((value) => value < 40));

console.table(averageStudants.filter((studant) => studant.average >= 7));
console.table(averageStudants.filter((studant) => studant.birth >= 2000));

let yearCurrent = new Date().getFullYear();
console.log(yearCurrent);

console.table(averageStudants.filter((studant) => yearCurrent - studant.birth >= 30));
console.table(
  averageStudants.filter(
    (studant) => Array.from(studant.name)[0].toLocaleLowerCase() == "j"
  )
);
