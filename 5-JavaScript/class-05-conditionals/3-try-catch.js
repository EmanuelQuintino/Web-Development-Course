// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

const runFunc = () => "Running function...";

try {
  console.log(runFunc());
} catch (error) {
  console.error(error);
} finally {
  console.log(`Sempre será executado!`);
}

document.write("Aplicação online!");

function divNumbers(num1, num2 = 1) {
  if (num2 == 0) throw new Error("Divisão por zero!");
  return num1 / num2;
}

try {
  console.log(divNumbers(4, 0));
} catch (error) {
  console.error(error);
}
