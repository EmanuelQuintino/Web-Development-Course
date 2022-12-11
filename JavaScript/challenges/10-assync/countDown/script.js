const semicircules = document.querySelectorAll('.semicircle')
const timer = document.querySelector('.timer')

const minute = 0;
const second = 5;

const minutes = minute * 60000
const seconds = second * 1000
const setTime = minutes + seconds
const startTime = Date.now();
const futureTime = startTime + setTime


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
        timer.style.color = 'red'
    }

    if (remainingTime < 0) {
        semicircules[0].style.backgroundColor = '#088b8b'
        semicircules[1].style.backgroundColor = '#088b8b'
        timer.style.color = '#088b8b'

        clearInterval(timerLoop)
    }
}

const timerLoop = setInterval(function countDownTimer() {
    const time = Date.now()
    circleRotate(time)
});