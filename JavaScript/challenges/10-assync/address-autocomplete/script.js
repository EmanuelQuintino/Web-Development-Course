const cep = document.querySelector('#cep')
const logradouro = document.querySelector('#logradouro')
const number = document.querySelector('#number')
const complemento = document.querySelector('#complemento')
const bairro = document.querySelector('#bairro')
const localidade = document.querySelector('#localidade')
const estado = document.querySelector('#estado')
const uf = document.querySelector('#uf')

console.log({cep, logradouro, number, complemento, localidade, uf});
cep.addEventListener('blur', (event) => {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then((request) => request.json())
        .then((data) => {
            logradouro.value = data.logradouro
            number.focus()
            complemento.value = data.complemento
            bairro.value = data.bairro
            localidade.value = data.localidade
            estado.value = data.uf
            uf.value = data.uf
        })
})