// Crie um algoritimo que tenha 3 funções que faça a média, 
// transforme para o sistema de caracteres ABC
// diga se o aluno foi aprovado (A, B e C) ou reprovado (D e E):

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// E:  < - 60

function mediaCalc (nota1, nota2) {
    let media = (nota1 + nota2) / 2 
    return media
}

function abcConvert (media) {
    
    let notaABC
    
    if (media >= 90 && media <=100){
        notaABC = 'A'
    }
    else if (media >= 80 && media <=89){
        notaABC = 'B'
    }
    else if (media >= 70 && media <=79){
        notaABC = 'C'
    }
    else if (media >= 60 && media <=69){
        notaABC = 'D'
    }
    else if (media >= 0 && media <=59){
        notaABC = 'E'
    }
    else {
        notaABC = 'Média inválida!'
    }

    return notaABC
}

function alunoResultado (notaACB){

    switch (notaACB){
        case 'A':
            window.alert('Excelente, aprovado com A!')
            break
        case 'B':
            window.alert('Muito bem, aprovado com B!')
            break
        case 'C':
            window.alert('Aprovado com C!')
            break
        case 'D':
            window.alert('Foi quase, reprovado com D!')
            break
        case 'E':
            window.alert('Precisa estudar mais, reprovado com E!')
            break
        default:
            window.alert('Nota ABC Inválida!')
    }  
    return none
}

// nota1 = 80
// nota2 = 90

nota1 = Number(window.prompt('Insira sua nota 1: '))
nota2 = Number(window.prompt('Insira sua nota 2: '))


let media = mediaCalc(nota1, nota2)
window.alert(media)

let abc = abcConvert(media)
// window.alert(abc)

let resultado = alunoResultado (abc)
window.alert(resultado)

// obs : O exercício é apenas educacional! As funções têm que ser especialistas e retornarem apenas um valor. Uma  melhor prática é usar as mensagens no main e a função chamar um valor.