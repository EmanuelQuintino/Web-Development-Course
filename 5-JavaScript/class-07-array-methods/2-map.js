let testReturnMap = teamArray.map((team, index, array) => {
  console.log(team, index, array);
  return [team, index, array];
});

console.log(testReturnMap); // Immutable

const real = [10, 20, 30, 40, 50];
const convertDollar = real.map((value) => value * 5.36);
console.log(convertDollar);
console.log(real);
