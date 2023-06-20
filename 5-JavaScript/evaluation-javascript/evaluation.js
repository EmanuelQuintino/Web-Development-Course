// Questão 1 (Data Manipulation)
// Adicione a lógica para reverter texto na função abaixo:

// function reverseText(text) {
//   return text;
// }

// console.log(reverseText("Web Development Course"));

function reverseText(text) {
  let revertedText = text.split("").reverse().join("")
  return revertedText;
}

// console.log(reverseText("Web Development Course"));


// Questão 2 (Data Manipulation)
// Adicione a lógica para reverter apenas as letras na função abaixo:

// function reverseLetters(string) {
//   return string;
// }

// console.log(reverseLetters("z<*zj"));
// result: j<*zz

function reverseLetters(string) {
  let revertedString = [...string].map((letter) => letter)
  return revertedString;
}

// console.log(reverseLetters("z<*zj"));


// Questão 3 (Asynchronism)
// Corrija o código abaixo para imprimir - respectivamente - Start, Timeout e Finish:

// const delay = () => setTimeout(() => {
//   console.log("Timeout");
// }, 3000);

// async function main() {
//   console.log("Start");
//   await delay();
//   console.log("Finish");
// }

// main();

const delay = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("Timeout"));
  }, 2000)
})

async function main() {
  // console.log("Start");
  // await delay();
  // console.log("Finish");
}

main();

// Questão 4 (Array manipulation)
// Faça uma função que receba um array de números inteiros e imprima a soma máxima e a soma mínima de 3 números:

function sumMaxMin(arrayNumbers) {
  const orderArrayNumbers = arrayNumbers.sort((a, b) => a - b);
  const sumMax = orderArrayNumbers.slice(-3).reduce((a, b) => a + b);
  const sumMin = orderArrayNumbers.slice(0, 3).reduce((a, b) => a + b);
  return console.log(sumMax, sumMin);
};

const arrayNumbers1 = [5, 4, 3, 2, 1];
const arrayNumbers2 = [12, 45, 23, 9, 102, 3];

// sumMaxMin(arrayNumbers2);
