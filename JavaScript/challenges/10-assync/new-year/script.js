const nextYear = new Date().getFullYear() + 1
const nextYearTime = new Date(`${nextYear}-01-01 00:00:00`)

const countdown = setInterval(() => {
    const dateNow = new Date()
    const timeLeft = nextYearTime - dateNow
    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24)
    const hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24
    const minutes = Math.floor(timeLeft / 1000 / 60) % 60
    const seconds = Math.floor(timeLeft / 1000) % 60

    const displayDays = document.querySelector('.days')
    const displayHours = document.querySelector('.hours')
    const displayMinutes = document.querySelector('.minutes')
    const displaySeconds = document.querySelector('.seconds')

    displayDays.innerHTML = String(days).padStart(3, 0)
    displayHours.innerHTML = String(hours).padStart(2, 0)
    displayMinutes.innerHTML = String(minutes).padStart(2, 0)
    displaySeconds.innerHTML = String(seconds).padStart(2, 0)
}, 1000)

