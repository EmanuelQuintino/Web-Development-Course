// Construa uma lógica para dizer se um número é par ou é ímpar
// Receba o número desejado do usuário via promp
// Escreve na tela o número e se ele é par ou é ímpar

const numUser = Number(prompt("Digite um número para saber se é par ou é ímpar: "))
const result = numUser % 2 == 0 ? "Par" : "Ímpar"

window.alert(`O número ${numUser} é ${result}`)