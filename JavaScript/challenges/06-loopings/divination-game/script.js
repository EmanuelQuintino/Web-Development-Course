// Receba um número de 0 a 10 escolhido pelo usuário via prompt
// Crie uma lógica que gera um número aleatório e compare com o que foi digitado
// Enquanto o usuário errar o número mostre: Errou! Tente novamente: 
// Se acertar apresente a mensagem: Parabens! Acertou em N tentativas.

let numberUser = Number(prompt("Adivinhe um número de 0 a 10: "))
const numberRamdom = Math.round(Math.random() * 10)

let countTry = 1
while(numberUser != numberRamdom) {
    countTry++
    numberUser = Number(prompt(`Errou! Tentativa número ${countTry}: `))
}

alert(`Parabêns! Você acertou o ${numberRamdom} em ${countTry} tentativa(s)`)