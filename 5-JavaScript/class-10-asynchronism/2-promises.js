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
  .then((answer) => console.log(answer))
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
const url = `https://api.github.com/users/${userName}`;
const gitHubUser = fetch(url)
  .then((request) => request.json())
  .then(({ name, bio }) => ({
    name,
    bio,
  }));

console.log(gitHubUser);

gitHubUser
  .then((user) => {
    console.log(`${user.name}: ${user.bio}`);
  })
  .catch((error) => console.error(error));

async function userGitHubData(user) {
  try {
    const url = `https://api.github.com/users/${user}`;
    await fetch(url)
      .then((request) => request.json())
      .then(({ name, bio }) => {
        console.log(`${name}: ${bio}`);
      });
  } catch (error) {
    console.error(error);
  }
}

userGitHubData("EmanuelQuintino");
console.log("Fim");

const gitHubUsers = Promise.all([
  fetch(`https://api.github.com/users/EmanuelQuintino`),
  fetch(`https://api.github.com/users/EmanuelQuintino`),
])
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
