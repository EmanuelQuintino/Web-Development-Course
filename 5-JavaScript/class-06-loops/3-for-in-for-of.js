// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// const team = 'Brasil'
const team = { name: "Brasil", cups: 5 };

for (let value of team) {
  /* Not iterable {} */
  console.log(value);
}

for (let index in team) {
  console.log(index);
  console.log(team[index]);
}

console.log(team);

const teams = ["Brasil", "Argentina", "Portugal", "Alemanha"];

for (let value of teams) {
  console.log(value);
}

for (let index in teams) {
  console.log(teams[index]);
}

console.log(teams);

const array = [
  [1, 2, 3],
  ["a", "b", "c"],
  [[], {}, () => "X"],
];

for (const i of array) {
  for (const j of array[i]) {
    // Not iterable array[i]
    console.log(array[i][j]);
  }
}
