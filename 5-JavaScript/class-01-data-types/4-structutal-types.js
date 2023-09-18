// Structutal Types (Object, Functions)

// Object
let name = "Emanuel";
let age = 29;
let profession = "Web Developer";

console.log(name);
console.log(age);
console.log(profession);

const person = {
  name: "Emanuel",
  age: 29,
  profession: "Web Developer",
};

console.log(person);
console.log(typeof person);
console.log(person.name);

// Array (Vector)
let countries = ["Brasil", "Alemanha", "Itália", "Uruguai", "Espanha"];

console.log(typeof countries);
console.log(countries);
console.log(countries[0]);

countries = ["Brasil", 5, "Alemanha", 4, "Itália", 4, "Uruguai", 2, "Espanha", 1];

countries = [
  ["Brasil", 5],
  ["Alemanha", 4],
  ["Itália", 4],
  ["Uruguai", 2],
  ["Espanha", 1],
];

console.log(countries);
console.log(typeof countries);
console.log(countries[3]);
console.log(typeof countries[4]);
console.log(countries[1]);
console.log(countries[3][1]);

countries = [
  { name: "Brasil", champion: 5 },
  { name: "Alemanha", champion: 4 },
  { name: "Itália", champion: 4 },
  { name: "Uruguai", champion: 2 },
  { name: "Espanha", champion: 1 },
];

let country = 0;

console.log(countries);
console.log(typeof countries);
console.log(countries[country].name);
console.log(countries[country].champion);

console.log(`${countries[country].name} tem ${countries[country].champion} título(s)`);
