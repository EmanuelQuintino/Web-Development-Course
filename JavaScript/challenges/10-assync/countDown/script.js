const timer = document.querySelector('.timer')
const semicircules = document.querySelectorAll('.semicircle')
const startButton = document.querySelector('.start-button')

let time, minute, second, minutes, seconds
let setTime, startTime, futureTime

startButton.addEventListener('click', () => {
    time = Number(prompt('Digite quantos minutos: ')) * 60
    minute = Math.floor(time / 60)
    second = time % 60

    minutes = minute * 60000
    seconds = second * 1000
    setTime = minutes + seconds
    startTime = Date.now();
    futureTime = startTime + setTime

    timer.style.display = 'flex'
    startButton.style.display = 'none'

    const timerRotate = setInterval(() => {
        console.log(futureTime);
        const currentTime = Date.now()
        const remainingTime = futureTime - currentTime
        const angle = (remainingTime / setTime) * 360

        if (angle > 180) {
            semicircules[2].style.display = 'none'
            semicircules[0].style.transform = 'rotate(180deg)'
            semicircules[1].style.transform = `rotate(${angle}deg)`
        } else {
            semicircules[2].style.display = 'block'
            semicircules[0].style.transform = `rotate(${angle}deg)`
            semicircules[1].style.transform = `rotate(${angle}deg)`
        }

        if (remainingTime <= 5000) {
            semicircules[0].style.backgroundColor = 'red'
            semicircules[1].style.backgroundColor = 'red'
            timer.style.color = 'red'
        }

        if (remainingTime < 0) {
            semicircules[0].style.backgroundColor = '#088b8b'
            semicircules[1].style.backgroundColor = '#088b8b'
            timer.style.color = '#088b8b'

            timer.style.display = 'none'
            startButton.style.display = 'flex'

            clearInterval(timerRotate)
        }
    });
})

function showTimer() {
    minute = Math.floor(time / 60)
    second = time % 60
    timer.innerHTML = `${String(minute).padStart(2, 0)}:${String(second).padStart(2, 0)}`
}

const countDown = setInterval(() => {
    showTimer()
    if (second <= 5 && second != 0) {
        console.log('beep');

        const beepAudio = document.querySelector('.beepAudio')
        beepAudio.play();
    }

    if (time == 0) {
        const alertAudio = new Audio('./audios/HTC-Mega-Happy.mp3')
        alertAudio.play()

        clearInterval(countDown)
    } else {
        --time
    }
}, 1000)