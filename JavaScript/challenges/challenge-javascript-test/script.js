// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo:
// Sting, Number, Boolean, Function, Array, Object

let number = 1
let sting = '1'
let boolean = true
let myFunction = () => {}
let array = []
let object = {}


// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão,
// resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

console.log(12 + 3);
console.log(12 - 3);
console.log(12 * 3);
console.log(12 / 3);
console.log(12 % 3);
console.log(12 ** 3);
console.log(144 ** (1/2));


// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" e imprima seu retorno.

function test() {
    return 'JavaScript'
}
console.log(test());


// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente
// insira mais um valor no final e substitua o do início por outro.

const list = ['A', 'B', 'C']
list.push('D')
list.shift()
list.unshift('E')
console.log(list);


// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.

for (let index = 0; index < list.length; index++) {
    console.log(list[index]);
}

for (const value of list) {
    console.log(value);
}


// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:

let count = 0
while (count <= 500) {
    if (count < 200 || count >=400) {
        console.log(count);
    }
    count++
}


// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

const speed = 75
const maxSpeed = 60

if (speed > maxSpeed || speed < (maxSpeed / 2)) {
    situation = 'multado!'
} else {
    situation = 'não multado!'
}

console.log(`Motorista ${situation}`)


// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000]
const newSalary = salary.map((salary) => salary * 10/100 + salary)
console.log(newSalary);

let sumNewSalary = newSalary.reduce((a, b) => a + b)
console.log(sumNewSalary.toLocaleString('pt-br', {style: 'currency', currency: 'brl'}));