const runMyAplication = () => "Running Function...";

try {
  console.log(runMyAplication());
} catch (error) {
  console.log(`My Test: ${error}`);
} finally {
  console.log(`Sempre será executado!`);
}

document.write("Rodando aplicação!");
