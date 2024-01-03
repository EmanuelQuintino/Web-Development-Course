// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const numbers = [1, 2, 3];

// immutable ⭐
const newNumbers = array.map((number) => number * 2);

console.log(numbers);
console.log(newNumbers);

const films = ["Matrix", "IT", "ET", "Jumanji", "Barbie"];

// higher-order function
const newFilms = films.map((film, index, array) => {
  return { film: film.toUpperCase(), index, array };
});

console.log(films);
console.log(newFilms);

const arrayDollar = [1, 2, 3000, 40, 50];

const realConverted = arrayDollar.map((dollar) => dollar * 5.05);

console.log(arrayDollar);
console.log(realConverted);

const rectangles = [
  { width: 4, height: 5 },
  { width: 7, height: 3 },
  { width: 2, height: 8 },
];

const areas = rectangles.map((rectangle, index) => {
  return {
    name: `Retângulo ${index + 1}`,
    area: rectangle.width * rectangle.height + "m²",
  };
});

console.log(areas);
console.table(areas);

const arrayNames = ["joão", "emanuel", "vieira", "quintino"];

const capitalizeNames = arrayNames.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(capitalizeNames.join(" "));
