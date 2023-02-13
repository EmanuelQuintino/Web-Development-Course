// Crie um algoritmo que tenha 3 funções que faça a média,
// Transforme essa média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e F):
// As funções devem funcionar com strings e notas inválidas devem retornar mensagem de erro.

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
    let noteABC

    Number(average)
    if (average >= 90 && average <=100){
        noteABC = 'A'
    }
    else if (average >= 80 && average <=89){
        noteABC = 'B'
    }
    else if (average >= 70 && average <=79){
        noteABC = 'C'
    }
    else if (average >= 60 && average <=69){
        noteABC = 'D'
    }
    else if (average >= 0 && average <=59){
        noteABC = 'F'
    }
    else {
        noteABC = 'Média inválida!'
    }

    return noteABC
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
            situation = 'Precisa estudar mais, reprovado com F!'
            break
        default:
            situation = 'Nota ABC Inválida!'
    }
    return situation
}

let note1 = 80
let note2 = "90"

let averageStudant = averageCalculate(note1, note2)
console.log(averageStudant)

let abcAverage = abcConvert(averageStudant)
console.log(abcAverage)

let situation = estudantSituation(abcAverage)
console.log(situation)