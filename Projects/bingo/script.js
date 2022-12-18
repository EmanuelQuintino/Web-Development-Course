let totalCards = 5
let sizeCard = 1 // não pode ser maior que o total de números
const totalNumbers = 75
const arrayNumbers = []

// localStorage.clear()

function numberDrawn() {
    while(localStorage.length < totalNumbers) {
        let numDrawn = Math.ceil(Math.random() * totalNumbers)

        let isIn = false
        for (let index = 1; index <= localStorage.length; index++) {
            if (localStorage.getItem(index) == numDrawn) {
                isIn = true
            }
        }

        if (!isIn) {
            localStorage.setItem(localStorage.length + 1, numDrawn)
            return numDrawn
        }
    }
}

function updateDisplay() {
    const numberCall = document.querySelector('.numberCall')
    const totalNumbersCall = document.querySelector('.totalNumbersCall')
    const displayTotalNumbers = document.querySelector('.totalNumbers')

    numberCall.innerHTML = localStorage.getItem(localStorage.length)
    totalNumbersCall.innerHTML = localStorage.length
    displayTotalNumbers.innerHTML = ` / ${totalNumbers}`

    const lastNumber1 = document.querySelector('.lastNumber1')
    const lastNumber2 = document.querySelector('.lastNumber2')
    const lastNumber3 = document.querySelector('.lastNumber3')

    if (localStorage.length > 1) {
        lastNumber1.innerHTML = localStorage.getItem(localStorage.length - 1)
    }

    if (localStorage.length > 2) {
        lastNumber2.innerHTML = localStorage.getItem(localStorage.length - 2)
    }

    if (localStorage.length > 3) {
        lastNumber3.innerHTML = localStorage.getItem(localStorage.length - 3)
    }

    const selectNumber = document.querySelectorAll(`.number`)
    selectNumber.forEach((number) => {
      for (let index = 1; index <= localStorage.length; index++) {
        if (number.textContent == localStorage.getItem(index)) {
            number.classList.add('select')
        }
      }
    })
}

function checkCards() {
    let cardToWin = 0
    for (const card of arrayCards) {
        let count = 0
        for (const number of card) {
            if(arrayNumbers.includes(String(number))) {
                count++
            }
        }

        if (count == sizeCard) {
            alert(`A cartela ${arrayCards.indexOf(card) + 1} bateu!`)
            return
        }

        if (count == sizeCard - 1) {
            cardToWin++
        }
    }

    if (cardToWin > 0) {
        alert(`${cardToWin} armada(s)`)
    }
}

//>>>>>>>>>>>>>>>>>>>>> Numbers <<<<<<<<<<<<<<<<<<<<<<<
const numbers =  document.querySelector('.numbersContainer')
for (let index = 1; index <= totalNumbers; index++) {
    numbers.innerHTML += `<div class="number number${index}">${index}</div>`
}

const buttonBingo = document.querySelector('.buttonBingo')
buttonBingo.addEventListener('click', (event) => {
    event.preventDefault()

    let numDrawn = numberDrawn();
    if (numDrawn) {
        // checkCards()
        updateDisplay()
    } else {
        alert('Bingo encerrado!')
    }
})

const configButton = document.querySelector('.configButton')
configButton.addEventListener('click', (event) => {
    event.preventDefault()
    const configContainer = document.querySelector('.configContainer')
    configContainer.style.display = 'grid'
})

const closeButton = document.querySelector('.closeButton')
closeButton.addEventListener('click', (event) => {
    event.preventDefault()
    const configContainer = document.querySelector('.configContainer')
    configContainer.style.display = 'none'
})

const newBingoButton = document.querySelector('.newBingoButton')
newBingoButton.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.clear()
    updateDisplay()

    const configContainer = document.querySelector('.configContainer')
    configContainer.style.display = 'none'
})

updateDisplay()










// >>>>>>>>>>>>>>>>>>>>> Cartelas <<<<<<<<<<<<<<<<<<<<<
// const arrayCards = []
// for (let index = 0; index < totalCards; index++) {
//     const arrayCard = []
//     for (let index = 0; index < sizeCard; index++) {
//         while(true) {
//             let number = Math.ceil(Math.random() * totalNumbers)
//               if (!arrayCard.includes(number)) {
//                   arrayCard.push(number)
//                   break;
//               }
//           }
//       }
//       arrayCard.sort((a, b) => a - b)
//       arrayCards.push(arrayCard)
//   }

// console.log(arrayCards);


// function includesNumber(number) {
//     if (!arrayNumbers.includes(number.textContent)) {
//             arrayNumbers.push(number.textContent)
//         }
//         console.log(arrayNumbers.sort((a, b)=> a - b));
// }