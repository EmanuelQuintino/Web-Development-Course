// Crie um algoritmo que adivinhe um número de 1 a 10
// Capture os números do usuário via promp enquanto ele errar
// Se acertar apresente a mensagem: Parabêns!, acertou o número 'X' em 'N' tentativas
// O programa deve ser encerrado caso o usuário clique em cancelar.

const numberRandom = Math.ceil(Math.random() * 10)

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

    if(numberUser > 10 || numberUser < 1) {
        alert("Atenção, número fora do intervalo de 1 a 10")
    }

    if (Number(numberUser) == numberRandom) {
        alert(`Parabêns! Acertou o número ${numberRandom} em ${countTry} tentativa(s)`)
        break;
    }

    countTry++
}