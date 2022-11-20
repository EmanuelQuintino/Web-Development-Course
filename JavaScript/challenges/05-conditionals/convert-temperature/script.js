// Crie uma função que receba uma String em Celsius (10c) ou Fahrenheit (50f) e converta para a outra unidade. Use tratamento de erro: Throw, Try e Catch

// C = (F - 32) * 5/9   
// F = C * 9/5 + 32   

let temperatura = '50f'

function grauConvert (grau){ //Posso usar dois parâmetros (grau, f) (grau, c) 
    
    grauCelsius = grau.toLocaleLowerCase().includes('c')
    grauFahrenheit = grau.toLocaleLowerCase().includes('f')
    
    //Fluxo de Erro
    if (!grauCelsius && !grauFahrenheit) { 
        throw new Error('Grau não Identificado')
    }

    //Fluxo de Ideal
    else if (grauCelsius == true) { // Posso usar expressão regular para pegar apenas o número
        let convertido = Number(grau.toLocaleLowerCase().replace('c', ''))
        return console.log((convertido * 9/5 + 32) + 'f')
    }

    //Fluxo Alternativo
    else if (grauFahrenheit == true){ //Posso usar expressão regular para pegar apenas o número
        let convertido = Number(grau.toLocaleLowerCase().replace('f', '')) //usar o let crio uma nova variável, se não usar o let uso a mesma variável do escopo anterior
        return console.log(((convertido - 32) * 5/9) + 'c')

    }
}

try {
    grauConvert(temperatura)
} 
catch (error) {
    console.log(error) //Objeto de erro tem .message
}