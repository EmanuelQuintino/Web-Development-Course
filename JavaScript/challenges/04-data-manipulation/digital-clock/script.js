// Crie um relógio digital no formato "hh:mm:ss"
// Faça com que o mesmo atualize em tempo integral [setInterval()] 
// Use um elemento html [DOM] para mostrar o relógio na tela  

const digitalClock = document.querySelector("#digitalClock")

setInterval( () => {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    digitalClock.innerHTML = `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`

}, 100)