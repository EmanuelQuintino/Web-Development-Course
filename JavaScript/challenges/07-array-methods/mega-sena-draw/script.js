// Crie um algoritmo que sortei os números da Mega Sena
// São 6 números aleatórios não duplicados de 1 a 60
// Os números devem estar em ordem crescente, separandos com "-"
// Insira 0 a esquerda para os números menores de 10. EX: 03-09.

const numbersMega = []

while(numbersMega.length < 6 ) {
    let num = Math.ceil(Math.random() * 60)

    if(!numbersMega.includes(num)){
        numbersMega.push(num)
    }
}

let showNumbers = numbersMega.map((number) => {
    return String(number).padStart(2, 0)
}).sort((a, b) => a - b).join('-')

document.write(showNumbers)