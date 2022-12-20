// >>>>>>> Asynchronism <<<<<<<

// function print(num) {
//     console.log(num);
// }

// function sum(num1, num2, callback) {
//     let sum = num1 + num2
//     callback(sum)
// }

// sum(2, 3, print)

// >>>>>>>> setTimeout <<<<<<<<<

// console.log('Antes');
// let timeOut = setTimeout(() => {
//     console.log('Test TimeOut ms');
// }, 2000)
// console.log('Depois');

// let index = 0
// const array = [12, 28, 33, 46, 52, 59]
// const newArray = []
// let interval = setInterval(() => {
//     newArray.push(array[index])

//     let numbers = document.querySelector('.numbers')
//     numbers.innerHTML = newArray.join('-')

//     if (array.length == newArray.length) {
//         clearInterval(interval)
//     }

//     index++
// }, 1500)

// // console.log(timeOut);
// // console.log(interval);

// let isFinish = false
// if (isFinish) {
//     clearInterval(interval)
// }


// >>>>>>>>>> Promises <<<<<<<<<<<<<<

// console.log('Fazer requisição');

// const promise = new Promise((resolve, reject) => {
//     let situation = true
//     if (situation) {
//         return resolve('Resposta do Banco de Dados!')
//     } else {
//         return reject('Sem resposta!')
//     }
// })

// promise
//     .then((answer) => console.log(answer))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Requisição concluída!'))

// async function requestData() {
//     try {
//         const response = await promise
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Requisição concluída!');
//     }
// }

// requestData()
// console.log('Finalizar requisição');

const userName = 'EmanuelQuintino'
const url = `https://api.github.com/users/${userName}`
const gitHubUser = fetch(url)
    .then(request => request.json())
    .then(({ name, bio, public_repos }) => ({
            name,
            bio,
            public_repos
        })
    )

// gitHubUser
//     .then((user) => {
//       console.log(`${user.name} tem ${user.public_repos} repositório(s) públicos: ${user.bio}`);
//     })
//     .catch((error) => console.log(error))


// >>>>>>>> Exercise <<<<<<<<<<<
// fetch(url)
//   .then(userRequest => userRequest.json())
//   .then(userData => fetch(userData.repos_url))
//   .then(repositoriesRequest => repositoriesRequest.json())
//   .then(userRepositories => {
//     for (const repository of userRepositories) {
//       console.log(repository.name)
//     }
//   })
//   .catch(error => console.log(error))


async function userRepositories(name) { // return promise
  try {
    const url = `https://api.github.com/users/${name}`
    const userData = await fetch(url).then(response => response.json())
    const userRepositories = await fetch(userData.repos_url).then(response => response.json())
    for (const repository of userRepositories) {
      console.log(repository.name);
    }
  } catch (error) {
    console.log(error);
  }
}

userRepositories('EmanuelQuintino')