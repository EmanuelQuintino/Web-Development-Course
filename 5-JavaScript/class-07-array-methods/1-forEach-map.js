// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const teams = ["Brasil", "Argentina", "Portugal", "Alemanha"];

teams.forEach((value, index, array) => {
  console.log(value, index, array);
});

const teamArray = Array.from(team);
const testReturnForEach = teamArray.forEach((value, index, array) => {
  console.log(value, index, array);
});

console.log(testReturnForEach); // no return

let testReturnMap = teamArray.map((team, index, array) => {
  console.log(team, index, array);
  return [team, index, array];
});

console.log(testReturnMap); // Immutable

const real = [10, 20, 30, 40, 50];
const convertDollar = real.map((value) => value * 5.36);
console.log(convertDollar);
console.log(real);
