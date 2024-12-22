// ⚠️ Desafio: Crie a tabuada de multiplicação de 1 a 9:

for (let number = 1; number < 10; number++) {
  for (let i = 0; i < 10; i++) {
    document.write(`${number} x ${i} = ${number * i} <br>`);
  }

  document.write(`<br>`);
}
