function createNumbers () {
    totalNumbers = localStorage.getItem('totalNumbers')
    const numbers =  document.querySelector('.numbersContainer')
    numbers.innerHTML = ``
    for (let index = 1; index <= totalNumbers; index++) {
        numbers.innerHTML += `<div class="number number${index}">${index}</div>`
    }
}

function numberDrawn() {
    while(localStorage.length - 1 < totalNumbers) {
        let numDrawn = Math.ceil(Math.random() * totalNumbers)
        let isIn = false
        for (let index = 1; index <= localStorage.length; index++) {
            if (localStorage.getItem(index) == numDrawn) {
                isIn = true
            }
        }

        if (!isIn) {
            localStorage.setItem(localStorage.length, numDrawn)
            return numDrawn
        }
    }
}

function updateDisplay() {
    const numberCall = document.querySelector('.numberCall')
    const totalNumbersCall = document.querySelector('.totalNumbersCall')
    const displayTotalNumbers = document.querySelector('.totalNumbers')

    createNumbers()

    numberCall.innerHTML = localStorage.length == 1 ? '-' : localStorage.getItem(localStorage.length - 1)
    totalNumbersCall.innerHTML = localStorage.length - 1
    displayTotalNumbers.innerHTML = ` / ${totalNumbers}`

    const lastNumber1 = document.querySelector('.lastNumber1')
    const lastNumber2 = document.querySelector('.lastNumber2')
    const lastNumber3 = document.querySelector('.lastNumber3')

    if (localStorage.length == 1) {
        lastNumber1.innerHTML = '-'
        lastNumber2.innerHTML = '-'
        lastNumber3.innerHTML = '-'
    }

    if (localStorage.length > 2) {
        lastNumber1.innerHTML = localStorage.getItem(localStorage.length - 2)
    }

    if (localStorage.length > 3) {
        lastNumber2.innerHTML = localStorage.getItem(localStorage.length - 3)
    }

    if (localStorage.length > 4) {
        lastNumber3.innerHTML = localStorage.getItem(localStorage.length - 4)
    }

    const selectNumber = document.querySelectorAll(`.number`)
    selectNumber.forEach((number) => {
        let isIn = false
        for (let index = 1; index <= localStorage.length; index++) {
            if (number.textContent == localStorage.getItem(index)) {
                isIn = true
            }
        }
        if (isIn) {
            number.classList.add('select')
        } else {
            number.classList.remove('select')
        }
    })
}

function configModalClose() {
    const configContainer = document.querySelector('.configContainer')
    configContainer.style.display = 'none'

    let Soundclick = new Audio('./sounds/click-2.mp3')
    Soundclick.play()

    isConfigActive = false
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

let totalNumbers
updateDisplay()

// Bingo Button
const buttonBingo = document.querySelector('.buttonBingo')
buttonBingo.addEventListener('click', (event) => {
    event.preventDefault()

    let Soundclick = new Audio('./sounds/click-1.mp3')
    Soundclick.play()

    let numDrawn = numberDrawn();
    if (numDrawn) {
        // checkCards()
        updateDisplay()
    } else {
        alert('Bingo encerrado!')
    }
})

let isConfigActive = false
const configButton = document.querySelector('.configButton')
configButton.addEventListener('click', (event) => {
    event.preventDefault()
    isConfigActive = true

    let Soundclick = new Audio('./sounds/click-2.mp3')
    Soundclick.play()

    const configContainer = document.querySelector('.configContainer')
    configContainer.style.display = 'grid'
})

// Close Button Config
const closeButton = document.querySelector('.closeButton')
closeButton.addEventListener('click', (event) => {
    event.preventDefault()
    configModalClose()
})

window.addEventListener('keyup', (event) => {
    if (isConfigActive) {
        if (event.key == 'Escape') {
            configModalClose()
        }

        // if (event.key == 'Enter') {
        //     newBingo()
        // }
    }
})

//Inputs
const inputAmountNumbers = document.querySelector("#inputAmountNumbersBingo")
inputAmountNumbers.addEventListener("keypress", (event) => {
    if(event.keyCode < 48 || event.keyCode > 57 || inputAmountNumbers.value.length == 2) {
        event.preventDefault()
    }
})

const inputSizeCard = document.querySelector("#inputSizeCard")
inputSizeCard.addEventListener("keypress", (event) => {
    if(event.keyCode < 48 || event.keyCode > 57 || inputSizeCard.value.length == 2) {
        event.preventDefault()
    }
})

const inputAmountCards = document.querySelector("#inputAmountCards")
inputAmountCards.addEventListener("keypress", (event) => {
    if(event.keyCode < 48 || event.keyCode > 57 || inputAmountCards.value.length == 4) {
        event.preventDefault()
    }
})

// New Bingo Button
const newBingoButton = document.querySelector('.newBingoButton')
newBingoButton.addEventListener('click', (event) => {
    event.preventDefault()

    let amountNumbers = Number(inputAmountNumbers.value)
    let sizeCard = Number(inputSizeCard.value)

    if (amountNumbers < 10 || amountNumbers > 75 || sizeCard < 5 || sizeCard > 60) {
        window.alert(`Por favor, preencha os valores no intervalo indicado.`)
    } else if (amountNumbers < sizeCard) {
        alert('Atenção, a quantidade de números do Bingo tem que ser maior que o tamanho da cartela!')
    } else {
        let Soundclick = new Audio('./sounds/click-3.mp3')
        Soundclick.play()

        localStorage.clear()
        localStorage.setItem('totalNumbers', inputAmountNumbers.value)
        updateDisplay()

        const configContainer = document.querySelector('.configContainer')
        configContainer.style.display = 'none'
        isConfigActive = false
    }
})




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