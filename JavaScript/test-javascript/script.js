// Questão 1 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

const speed = Number(prompt('Velocidade do carro:'))
const maxSpeed = 60

if (speed > maxSpeed || speed < (maxSpeed / 2)) {
    situation = 'multado!'
} else {
    situation = 'não multado!'
}

alert(`Motorista ${situation}`)


// Questão 2 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:

let count = 0
while (count <= 500) {
    if (count < 200 || count >=400) {
        console.log(count);
    }
    count++
}


// Questão 3 (for):
// Liste todos os animais do array

const animals = ['Gato', 'Cachorro', 'Baleia', 'Tubarão', 'Leão', 'Arara', 'Cobra']
for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    console.log(element);
}


// Questão 4 (array):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000]
const newSalary = salary.map((salary) => salary * 10/100 + salary)
console.log(newSalary);

let sumNewSalary = newSalary.reduce((a, b) => a + b)
console.log(sumNewSalary.toLocaleString('pt-br', {style: 'currency', currency: 'brl'}));