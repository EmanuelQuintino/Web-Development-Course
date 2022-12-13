// >>>>>>> Asynchronism <<<<<<<

function print(num) {
    console.log(num);
}

function sum(num1, num2, callback) {
    let sum = num1 + num2
    callback(sum)
}

// sum(2, 3, print)

// >>>>>>>> setTimeout <<<<<<<<<

// console.log('Antes');
let timeOut = setTimeout(() => {
    // console.log('Test TimeOut ms');
}, 2000)
// console.log('Depois');

let index = 0
const array = [12, 28, 33, 46, 52, 59]
const newArray = []
let interval = setInterval(() => {
    newArray.push(array[index])

    let numbers = document.querySelector('.numbers')
    numbers.innerHTML = newArray.join('-')

    if (array.length == newArray.length) {
        clearInterval(interval)
    }

    index++
}, 1500)

// console.log(timeOut);
// console.log(interval);

let isFinish = false
if (isFinish) {
    clearInterval(interval)
}