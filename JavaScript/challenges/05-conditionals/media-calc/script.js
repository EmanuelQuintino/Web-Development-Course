// Crie um algoritmo que solicite o Nome e Notas 1 e 2 do aluno
// Crie uma função para calcular a sua média
// Depois apresente o nome do aluno sua media e sua situação
// O aluno será aprovado somente SE ele teve média maior ou igual 7. 

function studantAvarege(nota1, nota2) {
    return (nota1 + nota2) / 2
}

const nameStudant = prompt("Nome: ")
const nota1 = Number(prompt("Nota 1: "))
const nota2 = Number(prompt("Nota 2: "))

const avarege= studantAvarege(nota1, nota2)
let situation = ''

if (avarege >= 7) {
    situation = 'aprovado(a)!'
}
else {
    situation = 'reprovado(a)!'
}

alert(`${nameStudant} teve média de ${avarege} e foi ${situation}`)