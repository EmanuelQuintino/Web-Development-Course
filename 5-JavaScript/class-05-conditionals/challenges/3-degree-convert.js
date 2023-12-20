// ⚠️ Desafio: Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ("C" ou "F")
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32

function degreeConvert(degree) {
  const auxDegree = String(degree).split(" ").join("");
  const arrayDegree = Array.from(auxDegree);
  const scaleDegree = arrayDegree.pop().toUpperCase();
  const newDegree = Number(arrayDegree.join(""));

  if (isNaN(newDegree)) throw Error("Valor inválido!");

  if (scaleDegree == "C") {
    return (newDegree * 9) / 5 + 32 + "F";
  } else if (scaleDegree == "F") {
    return ((newDegree - 32) * 5) / 9 + "C";
  } else {
    throw new Error("Escala inválida!");
  }
}

try {
  const degree = "100C";
  const covertedDegree = degreeConvert(degree);
  console.log(`${degree} = ${covertedDegree}`);
} catch (error) {
  console.error(error);
}
