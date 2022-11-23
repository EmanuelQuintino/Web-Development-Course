// Crie um algoritimo que tenha 3 funções que faça a média,
// Transforme essa média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e E):
// Avise quando algum valor for inválido

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F:  < - 60

function averageCalculate(note1, note2) {
    let average = (Number(note1) + Number(note2)) / 2

    if (!average) {
        average = "Insira somente notas válidas!"
    }

    return average
}
function abcConvert(average) {
    let notaABC

    Number(average)
    if (average >= 90 && average <=100){
        notaABC = 'A'
    }
    else if (average >= 80 && average <=89){
        notaABC = 'B'
    }
    else if (average >= 70 && average <=79){
        notaABC = 'C'
    }
    else if (average >= 60 && average <=69){
        notaABC = 'D'
    }
    else if (average >= 0 && average <=59){
        notaABC = 'F'
    }
    else {
        notaABC = 'Média inválida!'
    }

    return notaABC
}
function estudantSituation(noteABC){
    let situation

    switch (noteABC){
        case 'A':
            situation = 'Excelente, aprovado com A!'
            break
        case 'B':
            situation = 'Muito bem, aprovado com B!'
            break
        case 'C':
            situation = 'Aprovado com C!'
            break
        case 'D':
            situation = 'Foi quase, reprovado com D!'
            break
        case 'F':
            situation = 'Precisa estudar mais, reprovado com E!'
            break
        default:
            situation = 'Nota ABC Inválida!'
    }
    return situation
}

let nota1 = 60
let nota2 = "40"

let avaregeStudant = averageCalculate(nota1, nota2)
console.log(avaregeStudant)

let abcAvarege = abcConvert(avaregeStudant)
console.log(abcAvarege)

let situation = estudantSituation(abcAvarege)
console.log(situation)