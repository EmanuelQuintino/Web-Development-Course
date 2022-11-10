// Faça um programa que execute o IMC de cada paciente
// Os pacientes deverão estar em uma lista e conter as propriedades:
// name, height, weight
// Escreva na tela o nome do paciente e o seu IMC

function calcIMC (patient) {
    let imc = patient.weight / (patient.height / 100 ) ** 2
    return imc.toFixed(2)
}

const listPatients = [
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

document.write(`O IMC de ${listPatients[0].name} é ${calcIMC(listPatients[0])} <br>`)
document.write(`O IMC de ${listPatients[1].name} é ${calcIMC(listPatients[1])} <br>`)
document.write(`O IMC de ${listPatients[2].name} é ${calcIMC(listPatients[2])} <br>`)