// Promises
// Pending - Fulfilled - Rejected - Settled

console.log("Fazer requisição");

const promise = new Promise((resolve, reject) => {
  let situation = false;
  if (situation) {
    return resolve("Resposta do Banco de Dados!");
  } else {
    return reject("Sem resposta!");
  }
});

console.log(promise);

promise
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log("Requisição concluída!"));

async function requestData() {
  try {
    const response = await promise;
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Requisição concluída!");
  }
}

requestData();
console.log("Finalizar requisição");

console.log("Início");

const userName = "EmanuelQuintino";

console.log("Antes");

const userGitHub = fetch(API)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Fim da requisão!!!"));

console.log("Depois");
