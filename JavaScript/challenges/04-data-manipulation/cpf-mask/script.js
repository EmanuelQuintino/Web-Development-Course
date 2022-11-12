const cpf = document.querySelector("#cpf")

cpf.addEventListener("keypress", (event) => {
    
    console.log(event.keyCode)

    if(event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault()
    }

    cpf.value.length == 3 ? cpf.value += "." : cpf.value 
    cpf.value.length == 7 ? cpf.value += "." : cpf.value 
    cpf.value.length == 11 ? cpf.value += "-" : cpf.value
})