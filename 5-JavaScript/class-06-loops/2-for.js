// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// increment factor
for (let count = 1; count <= 100; count++) {
  if (count % 2 == 0) {
    console.log(count);
  }

  if (count > 20 && count < 80) {
    continue;
    // break;
  }
}

const array = [12, "text", () => "A"];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

const multArray = [
  ["A", "B", "C"],
  [1, 2, 3],
  [[], {}, () => "X"],
];

console.log(multArray[0][1]);
console.log(multArray[1][2]);
console.log(multArray[2][2]());

for (let i = 0; i < multArray.length; i++) {
  for (let j = 0; j < multArray[i].length; j++) {
    console.log(multArray[i][j]);
  }
}

const objectPerson = { name: "Emanuel", age: 30 };

// in - index
for (const i of array) {
  console.log(i);
}

for (const i of multArray) {
  for (const j of i) {
    console.log(j);
  }
}

for (const key in objectPerson) {
  console.log(key + ": " + objectPerson[key]);
}
