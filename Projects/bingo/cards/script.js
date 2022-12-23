const totalCards = Number(prompt('Quantas cartelas deseja gerar?'))
// const totalCards = 1
const sizeCard = 25
const totalNumbers = 75
const arrayCards = []
const dateBingo = new Date().toLocaleString('pt-BR')
console.log(dateBingo);

function creatsCards() {
    for (let index = 0; index < totalCards; index++) {
        const arrayCard = []
        for (let index = 0; index < sizeCard; index++) {
            while(true) {
                let number = Math.ceil(Math.random() * totalNumbers)
                if (!arrayCard.includes(number)) {
                    arrayCard.push(number)
                    break;
                }
            }
        }
        arrayCard.sort((a, b) => a - b)
        arrayCards.push(arrayCard)
    }
}

creatsCards()
console.log(arrayCards);


// Preencher Cartelas

// const pages =  document.querySelector('.pages')
// pages.innerHTML = ``

const cardsContainer =  document.querySelector('.cardsContainer')
cardsContainer.innerHTML = ``

for (let i = 0; i < arrayCards.length; i++) {
    cardsContainer.innerHTML += `
        <div class="card">
            <section class="header">
                <h1>BINGO</h1>
            </section>

            <div class="numbersCodContainer">
                <section class="numbersContainer numbersContainer${i}">
                    <div class="number">00</div>
                </section>

                <div class="codContainer">
                    <p>Data ${dateBingo} / N° ${String(i + 1).padStart(6, 0)}</p>
                </div>
            </div>
        </div>
    `
    const numbers =  document.querySelector(`.numbersContainer${i}`)
    numbers.innerHTML = ``
    for (let j = 0; j < arrayCards[i].length; j++) {
        numbers.innerHTML += `<div class="number number${j}">${arrayCards[i][j]}</div>`
    }
}



function includesNumber(number) {
    if (!arrayNumbers.includes(number.textContent)) {
            arrayNumbers.push(number.textContent)
        }
        console.log(arrayNumbers.sort((a, b)=> a - b));
}

print()