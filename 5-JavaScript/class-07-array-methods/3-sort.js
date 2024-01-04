// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const arrayNumbers = [2, "2", 1, 5, 2, 4, 3, 10];

// Lexicographic Order (Unicode)
console.log(arrayNumbers.sort());

// Table ASCII (0-9, A-Z, a-z)
arrayNumbers.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

arrayNumbers.sort((a, b) => b - a);
console.log(arrayNumbers);

const arrayNames = ["Pedinho", "eduardo", "Luíza", "Éric"];

arrayNames.sort();
arrayNames.sort((a, b) => a - b);

arrayNames.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

console.log("A" < "B");
console.log("A".charCodeAt());
console.log("B".charCodeAt());

arrayNames.sort((a, b) => a.localeCompare(b));
console.log(arrayNames); // mutable!

arrayNumbers.sort((a, b) => String(a).localeCompare(b)); // not work
console.log(arrayNumbers);

const arrayAnimes = [
  { name: "Cavaleiros do Zodíaco", year: 1986 },
  { name: "Dragon Ball", year: 1984 },
  { name: "Digimon", year: 1997 },
  { name: "Naruto", year: 1997 },
];

console.table(arrayAnimes.sort((a, b) => a.name.localeCompare(b.name)));
console.table(arrayAnimes.sort((a, b) => a.year - b.year));
console.table(arrayAnimes);
