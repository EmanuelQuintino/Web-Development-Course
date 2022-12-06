// Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ('C' ou 'F')
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32

function degreeConvert(degree) {
    let auxDegree = String(degree).split(" ").join("")
    let arrayDegree = Array.from(auxDegree)
    let scaleDegree = arrayDegree.pop()
    let newDegree = Number(arrayDegree.join(""))

    if (!newDegree) {
        throw new Error('Insira um valor válido (Ex: 10F ou 20C)')
    }
    if (scaleDegree.toUpperCase() == "C") {
        return (newDegree * 9/5 + 32).toLocaleString('pt-BR') + 'F'
    }
    else if (scaleDegree.toUpperCase() == "F"){
        return ((newDegree - 32) * 5/9).toLocaleString('pt-BR') + 'C'
    }
    else {
        throw new Error("Escala inválida (Ex: 10F ou 20C)")
    }
}

try {
    let temperature = '10C'
    console.log(`${temperature.toUpperCase()} =  ${degreeConvert(temperature)}`)
}
catch (error) {
    console.log(error)
}