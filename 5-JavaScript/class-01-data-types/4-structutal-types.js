// Structutal Types (Object, Functions)

// Object
let namePerson = "Emanuel";
let age = 29;
let profession = "Web Developer";

console.log(namePerson);
console.log(age);
console.log(profession);

const person = {
  name: "Emanuel",
  age: 29,
  profession: "Web Developer",
  action: () => {
    console.log("Estudou");
  },
};

const pokemon = {
  name: "Blastoise",
  level: 50,
  type: "Water",
  attack: () => "pound",
  special: () => "hydropump",
};

console.log(pokemon);
console.log(typeof pokemon);
console.log(pokemon.name);
console.log(pokemon.level);
console.log(pokemon["type"]);
console.log(pokemon.attack());
console.log(pokemon.special());

// Array (Vector)

// const pokedex = ["Charmander", 6, "Bulbasour", 5, "Squirtle", 4];

// const pokedex = [
//   ["Charmander", 6],
//   ["Bulbasour", 5],
//   ["Squirtle", 4],
// ];

const pokedex = [
  { name: "Charmander", level: 6 },
  { name: "Bulbasour", level: 5 },
  { name: "Squirtle", level: 4 },
];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[2]);
console.log(pokedex[1][0]);
console.log(pokedex[0].name);
console.log(pokedex[0].level);

console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person["profession"]);

console.log(`O ${pokedex[0].name} está no level ${pokedex[0].level}`);
