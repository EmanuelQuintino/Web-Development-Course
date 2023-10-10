console.log(averageStudants.find((studant) => yearCurrent - studant.birth >= 30));
console.log(
  averageStudants.find((studant) => studant.name.toLocaleLowerCase() == "amanda")
);
console.log(averageStudants.find((studant) => studant.id == 5));
