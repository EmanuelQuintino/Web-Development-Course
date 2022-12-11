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
    console.log('Test TimeOut ms');
}, 2000)
// console.log('Depois');

let interval = setInterval(() => {
    console.log('Test Interval ms');
}, 1000)

console.log(timeOut);
console.log(interval);

let isFinish = false
if (isFinish) {
    clearInterval(interval)
}