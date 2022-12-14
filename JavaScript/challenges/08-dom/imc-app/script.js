const calculateButton = document.querySelector('.calculate-button')
const closeButton = document.querySelector('.close-button')
const containerModal = document.querySelector('.container-modal')

function modalClose() {
    let containerModal = document.querySelector('.container-modal')
    containerModal.style.display = 'none'
}

calculateButton.addEventListener("click", (event) => {
    event.preventDefault()

    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)

    if (height && weight) {
        const imc = (weight / (height / 100) ** 2).toFixed(2)

        let situation
        if (imc < 18.5) {
            situation = 'Magreza'
        } else if (imc > 24.9) {
            situation = 'Sobrepeso'
        } else {
            situation = 'Peso Normal'
        }

        const result = document.querySelectorAll('.result')
        result.forEach((value) => {
            value.innerHTML = `O IMC é ${imc}
            ${situation}`
        })

        let containerModal = document.querySelector('.container-modal')
        containerModal.style.display = 'grid'
    } else {
      alert(`Por favor insira sua altura e peso.`)
    }
})

closeButton.addEventListener("click", () => {
    modalClose()
})

window.addEventListener("keydown", (event) => {
    if(event.key == "Escape") {
        modalClose()
    }
})

containerModal.addEventListener('click', (event) => {
    const isOut = event.target.matches('.container-modal')
    if (isOut) {
        modalClose()
    }
})