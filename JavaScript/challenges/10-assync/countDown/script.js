const semicircules = document.querySelectorAll('.semicircle')
const timer = document.querySelectorAll('.timer')

const minute = 0;
const second = 10;

const minutes = minute * 60000
const seconds = second * 1000
const setTime = minutes + seconds
const startTime = Date.now();
const futureTime = startTime + setTime


const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
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

    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60)
    const seconds = Math.floor((remainingTime / 1000) % 60)

    // timer.innerHTML = `
    // <span>${minutes}</span>
    // <span class="colon">:</span>
    // <span>${seconds}</span>
    // `;

    if (remainingTime < 0) {
        clearInterval(timerLoop)
    }
}