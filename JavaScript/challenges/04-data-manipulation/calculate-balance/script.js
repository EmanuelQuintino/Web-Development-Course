console.log('Seja Bem-Vindo à Aula de Calcular Saldo!')

// Crie dois objetos dp tipo Arrey com Receita e Despesas. Depois uma função para calcular o saldo e em seguida falar se está positivo ou Negativo.

let receita = [200, 2800.25, 800]
let despesa = [500, 2500, 300.89]

function saldo(receita, despesa){

    let totalReceita = 0
    for (let v of receita){ //Acessa o Valor
    totalReceita += v
    }
    
    let totalDespesa = 0
    for(let i in despesa){ // Acessa o Índice
    totalDespesa += despesa[i]
    }
    
    return totalReceita - totalDespesa
}

totalReceita = 0
for (let v of receita){ //Acessa o Valor
    totalReceita += v
}

totalDespesa = 0
for(let i in despesa){ // Acessa o Índice
    totalDespesa += despesa[i]
}

console.log(`Receita: ${totalReceita.toLocaleString('pt-br', { style: 'currency', currency: 'brl'})}`)

console.log(`Despeza: ${totalDespesa.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})}`)

saldoFinal =saldo(receita, despesa)
console.log(`Total: ${saldoFinal.toLocaleString('pt-br', {style:'currency', currency: 'brl'})}`)



if (saldoFinal > 0){
    console.log('Saldo Positivo!')
}
else if (saldoFinal == 0){
    console.log('Sem Saldo!')
}
else{
    console.log('Saldo Negativo!')
}