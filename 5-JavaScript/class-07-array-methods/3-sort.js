// Table ASCII (0-9, A-Z, a-z)

const numArray = [2, "2", 2, 1, 5, 19, 10, 20];
console.log(numArray.sort((a, b) => a - b));

console.table(averageStudants.sort((a, b) => b.average - a.average));

console.table(
  averageStudants.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })
);
