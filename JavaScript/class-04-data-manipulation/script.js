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
// console.log(myName.toLocaleUpperCase())

// console.log(typeof phrase.split(' ')[2])
// console.log(phrase.split(' ').join("_"))

// console.log(phrase.includes('web')) //case-sensitive
// console.log(phrase.toLocaleLowerCase().includes('web'))



// >>>>>>>>>>> Number Manipulation <<<<<<<<<<<<

let num1 = 7.93467
let num2 = -5

// console.log(num1)
// console.log(String(num1).length)
// console.log(String(num1).replace(".", "").length)

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

data = new Date()
data1 = new Date('2022-01-13 02:05:03')
data2 = new Date('2022-01-13 03:22:23')

// document.write(data)

// document.write(data1.getSeconds().toString().padStart(2, '0'))
// document.write(data1.getMinutes())
// document.write(data1.getHours())


// document.write(data1.getHours() + ":" + data1.getMinutes() + ":" + data1.getSeconds().toString().padStart(2, '0'))

// document.write(data.getDay()) // 0 - 6
// document.write(data.getDate())
// document.write(data.getMonth() + 1) // 0 - 11
// document.write(data.getFullYear())

// document.write(data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear())

// data.setSeconds(data.getSeconds() + 60)
// data.setMinutes(data.getMinutes() + 60)
// data.setHours(data.getHours() + 25)
// data.setDate(data.getDate() + 30)
// data.setMonth(data.getMonth() + 14)
// data.setFullYear(data.getFullYear() + 2)

// document.write(data.toLocaleString("pr-BR"))
// document.write(data.toLocaleDateString("pr-BR"))
// document.write(data.toLocaleTimeString("pr-BR"))

                                                   //  s      m    h    d
// document.write(Math.floor(Math.abs(data1 - data2) / 1000 / 60 / 60 / 24))



// >>>>>>>>>>>> Array Manipulation <<<<<<<<<<<<<

// let myArray = Array(1, "a", () => "A" )
// console.log(myArray.length)
// console.log(myArray)
// console.log(myArray[2]())

// let techs = ['HTML', 'CSS', 'Git']

// techs.push('JavaScript')
// techs.pop()
// techs.unshift('SQL')
// techs.shift()

// let index = techs.slice(0, 1)

// let index = techs.indexOf('SQL')
// techs.splice(index, 1)
// techs.splice(techs.indexOf("SQL"), 1)

// function deleteArrayIndex(techName) {
//     let aux = techs
//     techs = []

//     aux.map(tech => {
//         if(tech.toLocaleLowerCase() != techName.toLocaleLowerCase()) {
//             techs.push(tech)
//         }
//     })
// } 

// deleteArrayIndex("css")

// nums = [2, 1, 5, 19, 10]
// console.log(nums.sort((a, b) => a - b))

// console.log(techs.sort())
// console.log(index)