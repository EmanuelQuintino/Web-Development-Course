// Faça um programa que execute o IMC de cada paciente
// Os pacientes deverão estar em uma lista e conter as propriedades:
// name, height, weight
// Escreva na tela o nome do paciente e o seu IMC

function calcIMC (height, weight) {
    let imc = weight / (height / 100 ) ** 2
    return imc.toFixed(2)
}

let listPatients = [
    {
        name: 'Maria',
        height: 160,
        weight: 55
    },
    {
        name: 'Ana',
        height: 162,
        weight: 60
    },
    {
        name: 'Pedro',
        height: 185,
        weight: 80
    },
]

const imcPatients1 = calcIMC(listPatients[0].height, listPatients[0].weight)
const imcPatients2 = calcIMC(listPatients[1].height, listPatients[1].weight)
const imcPatients3 = calcIMC(listPatients[2].height, listPatients[2].weight)

document.write(`O IMC de ${listPatients[0].name} é ${imcPatients1} <br>`)
document.write(`O IMC de ${listPatients[1].name} é ${imcPatients2} <br>`)
document.write(`O IMC de ${listPatients[2].name} é ${imcPatients3} <br>`)