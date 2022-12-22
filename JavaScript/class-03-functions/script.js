// Function Statements


// >>>> Named <<<<

// function myTest(text) { //parameters
//     console.log(text)
// }

// myTest("Testando a função") //arguments


// function somar(num1, num2) {
//     // return num1 + num2

//     let soma = num1 + num2 //key operator
//     return soma
// }


// >>>> Anonymous <<<<

// const somar = function (num1, num2) {
//     return num1 + num2
// }


// >>>>> Arrow <<<<<

const somar = (num1, num2) => num1 + num2

// console.log(somar(2, 5))
// console.log(soma)


// >>>>> Callback <<<<<<

function show(item) {
    console.log(item);
}

function sum(num1, num2, callback) {
    let sum = num1 + num2
    callback(sum)
}

sum(2, 3, show)


// >>>> Constructor <<<<<

// function Car(brandName, motorPower) {
//     this.brand = brandName
//     this.motor = motorPower
// }

// const siena = new Car("Fiat", 1.4)
// const onix = new Car("Chevrolet", 1.4)
// const polo = new Car("Volkswagen", 1.0)

// console.log(siena.brand)
// console.log(onix.motor)
// console.log(polo)


// Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions