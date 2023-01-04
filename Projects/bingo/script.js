function newBingo() {
    let Soundclick = new Audio('./sounds/click-4.mp3')
    Soundclick.play()

    const dateBingo = new Date().toLocaleString('pt-BR')
    console.log(dateBingo);

    let totalNumbers = Number(inputAmountNumbers.value)
    let sizeCard = Number(inputSizeCard.value)
    let totalCards = Number(inputAmountCards.value)
    let colorTheme = inputColors.value

    const arrayCards = creatsCards(sizeCard, totalCards, totalNumbers)

    console.log(arrayCards);

    const bingoData = {
        hour: dateBingo,
        totalNumbers,
        sizeCard,
        totalCards,
        colorTheme,
        cards: arrayCards
    }

    // console.log(bingoData);

    if (totalNumbers < 40 || totalNumbers > 75 || sizeCard < 15 || sizeCard > 25 || totalCards < 2 || totalCards > 99) {
        window.alert(`Por favor, preencha os valores no intervalo indicado.`)
    } else if (totalNumbers < sizeCard) {
        alert('Atenção, a quantidade de números do Bingo tem que ser maior que o tamanho da cartela!')
    } else {
        localStorage.clear()
        localStorage.setItem('bingoData', JSON.stringify(bingoData))
        updateDisplay()

        const configContainer = document.querySelector('.configContainer')
        configContainer.style.display = 'none'
        isConfigActive = false
    }
}

function createNumbers () {
    const numbers =  document.querySelector('.numbersContainer')
    numbers.innerHTML = ``
    for (let index = 1; index <= bingoData.totalNumbers; index++) {
        numbers.innerHTML += `<div class="number number${index}">${index}</div>`
    }
}

function numberDrawn() {
    while(localStorage.length - 1 < bingoData.totalNumbers) {
        let numDrawn = Math.ceil(Math.random() * bingoData.totalNumbers)
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
    bingoDataLocal = localStorage.getItem('bingoData')
    bingoData = JSON.parse(bingoDataLocal)

    let bingoContainer = document.querySelector('.bingoContainer')
    bingoContainer.style.background = bingoData.colorTheme || '#008000'

    const numberCall = document.querySelector('.numberCall')
    const totalNumbersCall = document.querySelector('.totalNumbersCall')
    const displayTotalNumbers = document.querySelector('.totalNumbers')

    createNumbers()

    numberCall.innerHTML = localStorage.length == 1 ? '' : localStorage.getItem(localStorage.length - 1)
    totalNumbersCall.innerHTML = localStorage.length - 1
    displayTotalNumbers.innerHTML = ` / ${bingoData.totalNumbers}`

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

function openConfig() {
    let Soundclick = new Audio('./sounds/click-2.mp3')
    Soundclick.play()

    const configContainer = document.querySelector('.configContainer')
    configContainer.style.display = 'grid'
}

function configModalClose() {
    const configContainer = document.querySelector('.configContainer')
    configContainer.style.display = 'none'

    let Soundclick = new Audio('./sounds/click-2.mp3')
    Soundclick.play()

    isConfigActive = false
}

function creatsCards(sizeCard, totalCards, totalNumbers) {
    const arrayCards = []
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
    return arrayCards
}

function checkCards() {
    let cardsToWin = 0

    const arrayWinCards = []
    const arrayNumbers = []
    for (let index = 1; index < localStorage.length; index++ ) {
        let number = Number(localStorage.getItem(index))
        arrayNumbers.push(number)
    }

    console.log(arrayNumbers);


    for (const card of bingoData.cards) {
        console.log(card);

        let count = 0
        for (const number of card) {
            if(arrayNumbers.includes(number)) {
                count++
            }
        }

        if (count == bingoData.sizeCard - 1) {
            cardsToWin++
        }

        if (count == bingoData.sizeCard) {
            arrayWinCards.push(`Cartela ${bingoData.cards.indexOf(card) + 1}`)
        }
    }

    if (arrayWinCards.length > 1) {
        alert(` Bingo! ${arrayWinCards} bateram!`)
        return;
    } else if (arrayWinCards.length == 1) {
        alert(` Bingo! ${arrayWinCards} bateu!`)
        return;
    }

    if (cardsToWin > 0) {
        alert(`${cardsToWin} armada(s)`)
        const cardsToWinDisplay = document.querySelector('.armedCards')
        cardsToWinDisplay.innerHTML = cardsToWin
    } else {
        const cardsToWinDisplay = document.querySelector('.armedCards')
        cardsToWinDisplay.innerHTML = '-'
    }
}

// Buttons
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
    openConfig()
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
    if(event.keyCode < 48 || event.keyCode > 57 || inputAmountCards.value.length == 2) {
        event.preventDefault()
    }
})

const inputColors = document.querySelector("#inputColors")
inputColors.addEventListener('change', () => {
    let bingoContainer = document.querySelector('.bingoContainer')
    bingoContainer.style.background = inputColors.value

    const soundsChange = new Audio('./sounds/click-3.mp3')
    soundsChange.play()
})

// New Bingo
const newBingoButton = document.querySelector('.newBingoButton')
newBingoButton.addEventListener('click', (event) => {
    event.preventDefault()
    newBingo()
})


let bingoDataLocal = localStorage.getItem('bingoData')
let bingoData = JSON.parse(bingoDataLocal)
if (bingoData) {
    updateDisplay()
    console.log(bingoData);
} else {
    newBingo()
    // openConfig()
}