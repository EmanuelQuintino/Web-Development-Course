import { wordList } from "./scripts/wordListCup.js"

const flipBackWord = document.querySelector(".flipBack span")
const wordDrawn = document.querySelector(".wordDrawn span")
const buttonDrawn = document.querySelector(".buttonDrawn")
const buttonNewBingo = document.querySelector(".buttonNewBingo")
const tipWordDrawn = document.querySelector(".tipWordDrawnContainer span")
const listWordsDrawnContainer = document.querySelector(".listWordsDrawnContainer")

function showWordsDrawn() {
    listWordsDrawnContainer.innerHTML = `${wordList.map((value) => {
        let wordWasDrawn = ''
        for (let index = 0; index <= localStorage.length; index++) {
            if (value.word == localStorage.getItem(index + 1)) {
                wordWasDrawn = "class='wordWasDrawn'"
            }
        }
        return `<div ${wordWasDrawn}>${value.number}-${value.word}</div>`
    }).join('')}`
}

function newNumberDrawn() {
    const numbersDrawn = []
    for (let index = 0; index < localStorage.length; index++) {
        numbersDrawn.push(localStorage.getItem(index + 1))
    }

    while(wordList.length != localStorage.length) {
        let numDrawn = Math.ceil(Math.random() * wordList.length)

        if (!numbersDrawn.includes(wordList[numDrawn - 1].word)) {
            return numDrawn
        }
    }
}

function bingoDrawn(numDrawn) {
    if (numDrawn) {
        let count = localStorage.length
        localStorage.setItem(count + 1, wordList[numDrawn - 1].word)

        tipWordDrawn.innerHTML = wordList[numDrawn - 1].tips
        wordDrawn.innerHTML = wordList[numDrawn - 1].word
    }
    else {
        window.alert('Bingo encerrado!')
    }
}

function newBingo() {
    let resp = window.confirm('Deseja iniciar o Bingo?')
    if(resp) {
        localStorage.clear()
        showWordsDrawn()
    }
}

buttonDrawn.addEventListener('click', () => {
    bingoDrawn(newNumberDrawn())
})

flipBackWord.addEventListener('click', () => {
    showWordsDrawn()
})

buttonNewBingo.addEventListener('click', () => {
    newBingo()
})

listWordsDrawnContainer.addEventListener('click', ()=> {
    showWordsDrawn()
})

showWordsDrawn()