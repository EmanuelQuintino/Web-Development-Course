// >>>>>>>>>>> Data Manipulation <<<<<<<<<<<<<< 

// Prototype (Chain) 

// function Car(motorPower) {
//     this.motor = motorPower
// }

// console.log(new Car("v8").motor)

let myName = "Emanuel"
let age = 29

// console.log(myName.__proto__)
// console.log(age.__proto__)



// >>>>>>>>>>>> String <<<<<<<<<<<<<<

let phrase = 'Eu sou Web Developer'

// console.log(myName.length)
// console.log(myName[1])
// console.log(myName.toLocaleUpperCase())

// console.log(typeof phrase.split(' ')[2])
// console.log(phrase.split(' ').join("_"))

// console.log(phrase.includes('web')) //case-sensitive
// console.log("Web" == "web")
// console.log(phrase.toLocaleLowerCase().includes('web'))



// >>>>>>>>>>> Number Manipulation <<<<<<<<<<<<

let num1 = 7.93467
let num2 = -5

// console.log(num1)
// console.log(String(num1).length)
// console.log(String(num1).replace(".", "").length)
// console.log("R$ " + String(num1.toFixed(2)).replace(".", ","))

// console.log(Number(num1.toFixed(2)))
// console.log(Number(num1.toFixed(2).replace(".", ",")))
// console.log(typeof num1.toFixed(2).replace(".", ","))

// Convert Currency
// console.log(num1.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})) 
// console.log(num1.toLocaleString('pt-br', {style: 'currency', currency: 'usd'}))
// console.log(num1.toLocaleString('pt-br', {style: 'currency', currency: 'eur'})) 
// console.log(num1.toLocaleString('pt-br', {style: 'currency', currency: 'jpy'})) 

// International Standard Currency Code ISO 4217


// console.log(Math.sqrt(81))
// console.log(Math.PI)
// console.log(Math.abs(num2))

// console.log(Math.max(12, 34, 4, 98, 32, 56 ,178 ,12, 43, 65))
// console.log(Math.min(12, 34, 4, 98, 32, 56 ,178 ,12, 43, 65))

// console.log(Math.ceil(num1))
// console.log(Math.round(num1))
// console.log(Math.floor(num1))
// 
// console.log(Math.round(Math.random()*10))



// >>>>>>>>>>>>>> Date Manipulation <<<<<<<<<<<<

// let dateNow = new Date()
let date1 = new Date("2022-03-01 12:03:19")
let date2 = new Date("2022-04-01 12:03:19")

// document.write(dateNow)
// let hour = dateNow.getHours()
// let minutes = dateNow.getMinutes()
// let seconds = dateNow.getSeconds()
// let milliseconds = dateNow.getMilliseconds()

// document.write(`${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`)

// date1.setHours(date1.getHours() - 3)
// date1.setMinutes(date1.getMinutes() + 60)
// date1.setSeconds(date1.getSeconds() + 60)

// document.write(date1.toLocaleTimeString("pt-BR"))


// let day = dateNow.getDay()
// let date = dateNow.getDate()
// let month = dateNow.getMonth() + 1
// let year = dateNow.getFullYear()
// let minutes = date1.getMinutes()
// let seconds = date1.getSeconds()

// document.write(day + 1) // 0 - 6
// document.write(date)
// document.write(month + 1) // 0 - 11
// document.write(year)

// document.write(`${String(date).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`)

// dateNow.setDate(dateNow.getDate() + 30)
// dateNow.setMonth(dateNow.getMonth() + 2)
// dateNow.setFullYear(dateNow.getFullYear() + 30)

// document.write(dateNow.toLocaleDateString("pt-BR"))

// document.write(dateNow.toLocaleString("pt-BR"))

                                    //   s      m    h    d
// document.write(Math.abs(date1 - date2) / 1000 / 60 / 60 / 24)



// >>>>>>>>>>>> Array Manipulation <<<<<<<<<<<<<

// let myArray = Array(1, "a", () => "A" )
// console.log(myArray)
// console.log(myArray.length)
// console.log(myArray[2]())

let techs = ['HTML', 'CSS', 'Git']

techs.push('JavaScript')
// let removeElement = techs.pop()

techs.unshift('SQL')
// let removeElement = techs.shift()

// console.log(`${removeElement} foi removido!`)

// let index = techs.slice(1, -2)

let index = techs.indexOf('Git')
// techs.splice(index, 1)
// console.log(techs.splice(index, 1))
// techs.splice(techs.indexOf("SQL"), 1)

// nums = [2, "2", 2, 1, 5, 19, 10, 20]
// console.log(nums.sort((a, b) => a - b))

console.log(techs.sort())
console.log(index)