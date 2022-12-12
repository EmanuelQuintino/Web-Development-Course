const timer = document.querySelector('.timer')
const semicircules = document.querySelectorAll('.semicircle')

let time = Number(prompt('Digite quantos minutos: ')) * 60

const minute = 0;
const second = 7;

const minutes = minute * 60000
const seconds = second * 1000
const setTime = minutes + seconds
const startTime = Date.now();
const futureTime = startTime + setTime

function showTimer() {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    timer.innerHTML = `${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`
}

const timerRotate = setInterval(() => {
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

    if (remainingTime <= 3000) {
        semicircules[0].style.backgroundColor = 'red'
        semicircules[1].style.backgroundColor = 'red'
        timer.style.color = 'red'
    }

    if (remainingTime < 0) {
        semicircules[0].style.backgroundColor = '#088b8b'
        semicircules[1].style.backgroundColor = '#088b8b'
        timer.style.color = '#088b8b'

        clearInterval(timerRotate)
    }
});

const countDown = setInterval(() => {
    if (time == 0) {
        clearInterval(countDown)
    } else {
        --time
    }
    showTimer()
}, 1000)

showTimer()