// Crie um algoritmo que adivinhe um número de 1 a 10
// Capture os números do usuário via promp enquanto ele errar
// Se acertar apresente a mensagem: Parabêns!, acertou o número 'X' em 'N' tentativas
// O programa deve ser encerrado caso o usuário clique em cancelar.

const numberRamdom = Math.ceil(Math.random() * 10)

let countTry = 1
while(true) {
    let numberUser = prompt(`Adivinhe um número de 1 a 10: `)

    if (numberUser == null) {
        alert(`Programa encerrado!`)
        break;
    }

    if (numberUser == "") {
        alert('Insira um número de 1 a 10')
    }

    if (Number(numberUser) == numberRamdom) {
        alert(`Parabêns! Acertou o número ${numberRamdom} em ${countTry} tentativa(s)`)
        break;
    }

    countTry++
}