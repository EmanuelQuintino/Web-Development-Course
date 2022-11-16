// Crie um algoritmo que sortei os números da Mega Sena
// São 6 números aleatórios não duplicados de 1 a 60  
// Use um Arrey para guardar os números e apresentá-los
// Os números devem estar em ordem crescente, separandos com "-"
// Insira 0 a esquerda para os números menores de 10. EX: 03-09.

const numbersMega = []

while(numbersMega.length < 6 ) {
    let num = Math.ceil(Math.random() * 60)
    
    if(!numbersMega.includes(num)){
        numbersMega.push(num)
    }
}    

numbersMega.sort((a, b) => a - b)

let count = 0
for (const num of numbersMega) {
    document.write(`${count < 5 ? String(num).padStart(2, "0") + "-" : String(num).padStart(2, "0")}`)
    count += 1
}