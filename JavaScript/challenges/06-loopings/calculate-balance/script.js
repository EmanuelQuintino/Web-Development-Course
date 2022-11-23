// Crie uma função para calcular o saldo com dois argumentos: Receita e Despesas
// Imprima o saldo formatado, se está Positivo ou Negativo e se existe dívidas.
// Use as duas listas abaixo. Dica: Trate os dados com os métodos do array

const incomes = [
    'salary', 'R$ 2000,00',
    'commission', 'R$ 825,45',
    'bônus', 'R$ 320,00',
]

const expenses = [
    'rent', 'R$ 500,00',
    'energy', 'R$ 325,55',
    'water', 'R$ 120,34',
    'food', 'R$ 1300,62',
]

function balence(incomes, expenses) {
    const incomeValues = incomes.filter((value) => value.includes('R$'))
    const incomeValuesNumber = incomeValues.map((income) => Number(income.replace("R$ ", "").replace(',', '.')))
    const incomesSum = incomeValuesNumber.reduce((a, b) => a + b)

    const expensesValues = expenses.filter((value) => value.includes('R$'))
    const expensesValuesNumber = expensesValues.map((expense) => Number(expense.replace("R$ ", "").replace(',', '.')))
    const expensesSum = expensesValuesNumber.reduce((a, b) => a + b)

    return incomesSum - expensesSum
}

let statusBalence
let resultBalance = balence(incomes, expenses)

if ( resultBalance > 0) {
    statusBalence = 'Existe um superávit. Invista o dinheiro!'
}
else if ( resultBalance < 0) {
    statusBalence = 'Foi gasto todo dinheiro e existe dívidas!'
} else {
    statusBalence = 'Foi gasto todo dinheiro, mas não existe dívidas!'
}

console.log(`$Saldo de ${resultBalance.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})}. ${statusBalence}`)