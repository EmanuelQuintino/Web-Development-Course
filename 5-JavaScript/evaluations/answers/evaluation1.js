// Question 1 (Data Types)
// Declare as seguntes variáveis e atribua os valores por tipo: Sting, Number, Boolean, Function, Array, Object

let number = 1;
let sting = "1";
let boolean = true;
let myFunction = function () {};
let array = [1, "A", true];
let object = { key: "value" };

// Question 2 (Operators)
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 2 e 3 e raiz quadrada de 144

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 % 3);
console.log(2 ** 3);
console.log(144 ** (1 / 2));
console.log(Math.sqrt(144));

// Question 3 (Functions)
// Crie e execute uma função de nome "concat" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno

function concat(value) {
  return "JavaScript " + value;
}

console.log(concat(10));

// Question 4 (Data Manipulation)
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro

const list = ["A", "B", "C"];
list.push("D");
list.shift();
list.unshift("E");
list[0] = "test";
console.log(list);

// Question 5 (for)
// Liste todos os valores do array criado na questão anterior ultilizando o for

for (let index = 0; index < list.length; index++) {
  console.log(list[index]);
}

for (const value of list) {
  console.log(value);
}

// Question 6 (while)
// Escreva os números de 0 a 100 sem os que pertencem à familía do 40, do 50 e do 60

let count = 0;
while (count <= 100) {
  if (count < 40 || count >= 70) {
    console.log(count);
  }
  count++;
}

// Question 7 (if)
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

const speed = 75;
const maxSpeed = 60;

if (speed > maxSpeed) {
  console.log("Multado por excesso de velocidade!");
} else if (speed < maxSpeed / 2) {
  console.log("Multado por baixa velocidade!");
} else {
  console.log("Não multado!");
}

// Question 8 (array methods)
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salaries = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

const newSalary = salaries.map((salary) => salary * 1.1);
console.log(newSalary);

const sumnewSalary = newSalary.reduce((a, b) => a + b);
console.log(sumnewSalary);
