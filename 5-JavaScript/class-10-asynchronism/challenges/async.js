// Corrija o código abaixo para imprimir - respectivamente - Start, Timeout e Finish:

const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("Timeout"));
    }, 2000);
  });

async function main() {
  console.log("Start");
  await delay();
  console.log("Finish");
}

main();
