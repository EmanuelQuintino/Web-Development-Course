// structural types (object, array, functions)

// object
const userName = "Emanuel";
const userAge = 29;
const userProfession = "Web Developer";

console.log(userName);
console.log(userAge);
console.log(userProfession);

const user = {
  name: "Emanuel",
  age: 29,
  profession: "Web Developer",
  phone: "(88) 99605-9913",
  isAdmin: true,
};

console.log(user);
console.log(typeof user);
console.log(user.name);
console.log(user.phone);
console.log(user.profession);
console.log(user.isAdmin);

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

// array (vector)

const filmList = ["Matrix", "Interestellar", "Shrek", "Get Out", "Split"];

console.log(filmList);
console.log(typeof filmList);

console.log(filmList[0]);
console.log(filmList[-1]);

console.log(filmList[1]);
console.log(filmList[2]);
console.log(filmList[3]);
// N.A.N

const pokedex = [
  { name: "Charmander", level: 6 },
  { name: "Bulbasour", level: 5 },
  { name: "Squirtle", level: 4 },
];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[2]);
console.log(pokedex[0].name);
console.log(pokedex[0].level);
console.log(pokedex[-1]);

console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person["profession"]);

console.log(`O ${pokedex[0].name} está no level ${pokedex[0].level}`);
