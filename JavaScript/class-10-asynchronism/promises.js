// console.log('Fazer requisição');

// const promise = new Promise((resolve, reject) => {
//     let situation = false
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

// console.log('Finalizar requisição');

const request = fetch('https://api.github.com/users/EmanuelQuintino')
    .then(request => request.json())
    .then(json => fetch(json.repos_url))
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.log(error))


// async function objectFunc(url) {
//     const request = await fetch(url)
//     const json = await request.json()
//     return json

// }

// console.log(objectFunc(url));