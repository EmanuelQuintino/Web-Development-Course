const calculateButton = document.querySelector('.calculate-button')
const closeButton = document.querySelector('.close-button')

calculateButton.addEventListener("click", (event) => {
    event.preventDefault()

    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    const imcCalculate = (weight / (height / 100) ** 2).toFixed(2)

    if (height && weight) {
        const result = document.querySelectorAll('.result')
        console.log(result);

        result.forEach((value) => {
            value.innerHTML = `Seu IMC é ${imcCalculate}`
        })

        console.log(height);
        console.log(weight);
        console.log(imcCalculate);

        let containerModal = document.querySelector('.container-modal')
        containerModal.style.display = 'grid'
    } else {
      alert(`Por favor insira seu peso e altura.`)
    }
})

closeButton.addEventListener("click", (event) => {
    let containerModal = document.querySelector('.container-modal')
    containerModal.style.display = 'none'
})