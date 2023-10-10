const teams = ["Brasil", "Argentina", "Portugal", "Alemanha"];

teams.forEach((value, index, array) => {
  console.log(value, index, array);
});

const teamArray = Array.from(team);
const testReturnForEach = teamArray.forEach((value, index, array) => {
  console.log(value, index, array);
});

console.log(testReturnForEach); // no return
