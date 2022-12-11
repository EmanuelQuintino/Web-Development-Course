const semicircules = document.querySelectorAll('.semicircle')
const timer = document.querySelectorAll('.timer-container span')

const minute = 0;
const second = 5;

const minutes = minute * 60000
const seconds = second * 1000
const setTime = minutes + seconds
const startTime = Date.now();
const futureTime = startTime + setTime


const timerLoop = setInterval(countDownTimer);

function circleRotate(time) {
    const currentTime = time
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

        timer.forEach((value) => {
            value.style.color = 'red'
        })
    }

    if (remainingTime < 0) {
        clearInterval(timerLoop)

        semicircules[0].style.backgroundColor = '#088b8b'
        semicircules[1].style.backgroundColor = '#088b8b'

        timer.forEach((value) => {
            value.style.color = '#088b8b'
        })
    }
}

function countDownTimer() {
    const time = Date.now()
    circleRotate(time)
}

countDownTimer();