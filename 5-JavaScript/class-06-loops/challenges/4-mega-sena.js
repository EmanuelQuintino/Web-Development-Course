// Crie um algoritmo que sortei os números da Mega-Sena
// São 6 números aleatórios não duplicados de 1 a 60
// Coloque em ordem crescente, com 0 a esquerda e separe com "-"

const numbersMega = [];

while (numbersMega.length < 6) {
  let numberDrawn = String(Math.ceil(Math.random() * 60)).padStart(2, 0);

  if (!numbersMega.includes(numberDrawn)) {
    if (numberDrawn > numbersMega[numbersMega.length - 1]) {
      numbersMega.push(numberDrawn);
    } else if (numberDrawn < numbersMega[0]) {
      numbersMega.unshift(numberDrawn);
    }
  }
}

document.write(numbersMega.join("-"));
