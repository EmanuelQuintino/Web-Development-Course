const runMyAplication = () => "Running Function...";

try {
  console.log(runMyAplication());
} catch (error) { // hoisting 
  console.error(`My Test: ${error}`);
} finally {
  console.log(`Sempre será executado!`);
}

document.write("Rodando aplicação!");

function divideNumbers(num1, num2 = 1) {
  if (num2 === 0) throw new Error("Divisor não pode ser 0!");
  return num1 / num2;
}

try {
  console.log(divideNumbers(4, 0));
} catch (error) {
  console.error(error);
}
