// Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ('C' ou 'F')
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32

function degreeConvert(degree) {
  const auxDegree = String(degree).split(" ").join("");
  const arrayDegree = Array.from(auxDegree);
  const scaleDegree = arrayDegree.pop().toUpperCase();
  const newDegree = Number(arrayDegree.join(""));

  if (isNaN(newDegree)) {
    throw new Error("Valor inválido! Insira conforme exemplo: 10F ou 20C.");
  }

  function convertToFahrenheit() {
    return ((newDegree * 9) / 5 + 32).toLocaleString("pt-BR") + "F";
  }

  function convertToCelsius() {
    return (((newDegree - 32) * 5) / 9).toLocaleString("pt-BR") + "C";
  }

  switch (scaleDegree) {
    case "C":
      return convertToFahrenheit();
    case "F":
      return convertToCelsius();
    default:
      throw new Error("Escala não identificada, insira 'C' ou 'F': Ex: 10F ou 20C.");
  }
}

try {
  const temperature = "10C";
  console.log(`${temperature.toUpperCase()} =  ${degreeConvert(temperature)}`);
} catch (error) {
  console.error(error);
}
