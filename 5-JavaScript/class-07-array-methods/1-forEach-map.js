// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const array = ["Matrix", "IT", "ET", "Jumanji", "Barbie"];

console.log(array);

const arrayForEach = array.forEach((value, index, array) => {
  // array[index] = "A";
  return { value, index, array };
});

console.log(arrayForEach);

// Immutable ⭐
const arrayMap = array.map((value, index, array) => {
  return { value, index, array };
});

console.log(array);
console.log(arrayMap);

const arrayDollar = [1, 2, 3000, 40, 50];

const realConverted = arrayDollar.map((dollar) => dollar * 5.05);

console.log(arrayDollar);
console.log(realConverted);

const rectangles = [
  { width: 4, height: 5 },
  { width: 7, height: 3 },
  { width: 2, height: 8 },
];

const calculatedAreas = rectangles.map((value, index) => {
  return {
    name: `Retângulo ${index + 1}`,
    area: value.width * value.height,
  };
});

console.log(calculatedAreas);
console.table(calculatedAreas);

const arrayNames = ["joão", "emanuel", "vieira", "quintino"];

const capitalizeNames = arrayNames.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(capitalizeNames.join(" "));
