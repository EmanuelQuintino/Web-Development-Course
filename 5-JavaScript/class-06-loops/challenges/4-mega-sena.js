// Crie um algoritmo que sortei os números da Mega-Sena
// São 6 números aleatórios não duplicados de 1 a 60
// Coloque em ordem crescente, com 0 a esquerda e separe com "-"

const numbersMega = [];

while (numbersMega.length < 6) {
  let numberDrawn = String(Math.ceil(Math.random() * 60)).padStart(2, 0);

  if (!numbersMega.includes(numberDrawn)) {
    numbersMega.push(numberDrawn);
  }
}

document.write(numbersMega.sort((a, b) => a - b).join("-"));
