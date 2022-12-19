const calculateButton = document.querySelector('.calculate-button')
const closeButton = document.querySelector('.close-button')
const containerModal = document.querySelector('.container-modal')

function modalClose() {
    let containerModal = document.querySelector('.container-modal')
    containerModal.style.display = 'none'
}

function imcCalculate(event) {
    event.preventDefault();

    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)

    if (height && weight) {
        const imc = (weight / (height / 100) ** 2).toFixed(2)

        let situation
        if (imc < 18.5) {
            situation = 'Magreza'
        } else if (imc >= 18.5 && imc < 25) {
            situation = 'Peso Normal'
        }else if (imc >= 25 && imc < 30) {
            situation = 'Sobrepeso'
        } else if (imc >= 30 && imc < 35) {
            situation = 'Obesidade I'
        } else if (imc >= 35 && imc < 40) {
            situation = 'Obesidade II'
        } else if (imc >= 40 ) {
            situation = 'Obesidade III'
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
}

calculateButton.addEventListener("touchstart", imcCalculate)
calculateButton.addEventListener("click", imcCalculate)

closeButton.addEventListener("click", () => {
    modalClose()
})

containerModal.addEventListener('click', (event) => {
    const isOut = event.target.matches('.container-modal')
    if (isOut) {
        modalClose()
    }
})

window.addEventListener("keyup", (event) => {
    if(event.key == "Escape") {
        modalClose()
    }
})