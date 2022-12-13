const timer = document.querySelector('.timer')
const semicircules = document.querySelectorAll('.semicircle')
const startButton = document.querySelector('.start-button')

startButton.addEventListener('click', () => {
    let time = Number(prompt('Digite quantos minutos: ')) * 60
    let minute = Math.floor(time / 60)
    let second = time % 60

    const minutes = minute * 60000
    const seconds = second * 1000
    const setTime = minutes + seconds
    const startTime = Date.now();
    const futureTime = startTime + setTime

    timer.style.display = 'flex'
    startButton.style.display = 'none'

    function showTimer() {
        minute = Math.floor(time / 60)
        second = time % 60
        timer.innerHTML = `${String(minute).padStart(2, 0)}:${String(second).padStart(2, 0)}`
    }

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

    const countDown = setInterval(() => {
        if (second <= 6 && second != 1) {
            console.log('beep');

            const beepAudio = document.querySelector('.beepAudio')
            beepAudio.play();
        }

        if (time == 1) {
            const alertAudio = new Audio('./audios/HTC-Mega-Happy.mp3')
            alertAudio.play()

            clearInterval(countDown)
        } else {
            --time
        }
        showTimer()
    }, 1000)

    showTimer()
})