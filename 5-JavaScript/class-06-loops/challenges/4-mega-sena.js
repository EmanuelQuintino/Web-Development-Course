// ⚠️ Desafio: Crie um algoritmo que sortei os números da Mega-Sena
// São 6 números aleatórios não duplicados de 1 a 60
// Coloque em ordem crescente, com 0 a esquerda e separe com "-"

const numbersMega = [];

while (numbersMega.length < 6) {
  const numberDrawn = Math.ceil(Math.random() * 60);
  const formatedNumber = String(numberDrawn).padStart(2, "0");

  if (!numbersMega.includes(formatedNumber)) {
    numbersMega.push(formatedNumber);
  }
}

console.log(numbersMega.sort((a, b) => a - b).join("-"));
