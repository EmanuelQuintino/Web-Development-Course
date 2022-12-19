console.log('Fazer requisição');

const promise = new Promise((resolve, reject) => {
    let situation = true
    if (situation) {
        return resolve('Resposta do Banco de Dados!')
    } else {
        return reject('Sem resposta!')
    }
})

promise
    .then((answer) => console.log(answer))
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída!'))

async function requestData() {
    try {
        const response = await promise
        console.log(response);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Requisição concluída!');
    }
}

requestData()
console.log('Finalizar requisição');

const url = 'https://api.github.com/users/EmanuelQuintino'
const requestUser = fetch(url)
    .then(request => request.json())
    .then(json => fetch(json.repos_url))
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.log(error))