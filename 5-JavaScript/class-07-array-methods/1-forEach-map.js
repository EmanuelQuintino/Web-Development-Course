// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const array = ["Matrix", "IT", "ET", "Jumanji", "Barbie"];

console.log(array);

const arrayForEach = array.forEach((value, index, array) => {
  // array[index] = "A";
  return { value, index, array };
});

console.log(arrayForEach);

// Immutable
/*⭐*/ const arrayMap = array.map((value, index, array) => {
  return { value, index, array };
});

console.log(array);
console.log(arrayMap);

const dollar = [1, 2, 3000, 40, 50];

const realConverted = dollar.map((value) => value * 5.05);

console.log(dollar);
console.log(realConverted);
