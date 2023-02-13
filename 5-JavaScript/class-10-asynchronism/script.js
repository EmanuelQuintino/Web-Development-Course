// >>>>>>> Asynchronism <<<<<<<

// function canDrive(age) {
//     console.log(age >= 18);
// }

// function age(yearBorn, callback) {
//     let age = new Date().getFullYear() - yearBorn
//     console.log(age);
//     callback(age)
// }

// age(2007, canDrive)

// >>>>>>>> setTimeout <<<<<<<<<

// console.log('Antes');
let timeOut = setTimeout(() => {
    // console.log('Test TimeOut ms');
}, 2000)
// console.log('Depois');

let count = 0
const array = [12, 28, 33, 46, 52, 59]
const newArray = []
let interval = setInterval(() => {
    // console.log('SetInterval');
    newArray.push(array[count])

    let numbers = document.querySelector('.numbers')
    // numbers.innerHTML = newArray.join('-')

    if (array.length == newArray.length) {
        clearInterval(interval)
    }

    count++
}, 1400)

// console.log(timeOut);
// console.log(interval);

let isFinish = false
if (isFinish) {
  clearTimeout(timeOut)
  clearTimeout(interval)
}


// >>>>>>>>>> Promises <<<<<<<<<<<<<<

// Pending - Fulfilled - Rejected - Settled

// console.log('Fazer requisição');

// const promise = new Promise((resolve, reject) => {
//     let situation = false
//     if (situation) {
//         return resolve('Resposta do Banco de Dados!')
//     } else {
//         return reject('Sem resposta!')
//     }
// })

// console.log(promise);

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

console.log('Início');

// const userName = 'EmanuelQuintino'
// const url = `https://api.github.com/users/${userName}`
// const gitHubUser = fetch(url)
//     .then(request => request.json())
//     .then(({ name, bio }) => ({
//             name,
//             bio,
//         })
//     )

// console.log(gitHubUser);

// gitHubUser
//     .then((user) => {
//       console.log(`${user.name}: ${user.bio}`);
//     })
//     .catch((error) => console.log(error))

async function userGitHubData(user) {
    try {
        const url = `https://api.github.com/users/${user}`
        await fetch(url)
            .then(request => request.json())
            .then(({name, bio}) => {
                    console.log(`${name}: ${bio}`);
                });
    } catch (error) {
        console.log(error);
    }
}

userGitHubData('EmanuelQuintino')
console.log('Fim');

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


// async function userRepositories(name) { // return promise
//   try {
//     const url = `https://api.github.com/users/${name}`
//     const userData = await fetch(url).then(response => response.json())
//     const userRepositories = await fetch(userData.repos_url).then(response => response.json())
//     for (const repository of userRepositories) {
//       console.log(repository.name);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// userRepositories('EmanuelQuintino')