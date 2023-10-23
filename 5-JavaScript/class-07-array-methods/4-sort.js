// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const arrayNumbers = [2, "2", 1, 5, 2, 4, 3, 10];

// Table ASCII (0-9, A-Z, a-z)
arrayNumbers.sort();

arrayNumbers.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

arrayNumbers.sort((a, b) => b - a);

console.log(arrayNumbers);

const arrayNames = ["Emanuel", "Ana", "Pedro", "gato", "casa", "Érica"];

arrayNames.sort();
arrayNames.sort((a, b) => a - b);

arrayNames.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

arrayNames.sort((a, b) => a.localeCompare(b));
console.log(arrayNames);

// Lexicographic Order (Unicode)
console.log("A" < "B");
console.log("A".charCodeAt());
console.log("B".charCodeAt());

const arrayAnimes = [
  { name: "Cavaleiros do Zodíaco", year: 1985 },
  { name: "Dragon Ball Z", year: 1989 },
  { name: "Digimon", year: 2000 },
  { name: "Naruto", year: 2004 },
];

console.table(
  arrayAnimes.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })
);
