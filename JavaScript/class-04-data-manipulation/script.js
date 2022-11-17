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

date = new Date()
let date1 = new Date('2022-03-01 02:05:03')
let date2 = new Date('2022-04-01 02:22:23')

// document.write(date)

// document.write(date1.getHours())
// document.write(date1.getMinutes())
// document.write(date1.getSeconds().toString().padStart(2, '0'))


// document.write(date1.getHours().toString().padStart(2, '0') + ":" + date1.getMinutes().toString().padStart(2, '0') + ":" + date1.getSeconds().toString().padStart(2, '0'))

// document.write(date1.toLocaleTimeString("pt-BR"))


// document.write(date.getDay()) // 0 - 6
// document.write(date.getDate())
// document.write(date.getMonth() + 1) // 0 - 11
// document.write(date.getFullYear())

// document.write(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear())

// document.write(date.toLocaleDateString("pr-BR"))


// date1.setSeconds(date1.getSeconds() + 157)
// date1.setMinutes(date1.getMinutes() + 56)
// date1.setHours(date1.getHours() + 23)

// date1.setDate(date1.getDate() + 20)
// date1.setMonth(date1.getMonth() + 13)
// date1.setFullYear(date1.getFullYear() + 20)

// document.write(date1.toLocaleString("pr-BR"))


                                                //   s     m    h    d
// document.write(Math.floor(Math.abs(date1 - date2) / 1000 / 60 / 60 / 24))



// >>>>>>>>>>>> Array Manipulation <<<<<<<<<<<<<

// let myArray = Array(1, "a", () => "A" )
// console.log(myArray)
// console.log(myArray.length)
// console.log(myArray[2]())

let techs = ['HTML', 'CSS', 'Git']

techs.push('JavaScript')

// let removeElement = techs.shift()
let removeElement = techs.pop()

// console.log(`${removeElement} foi removido!`)

// techs.unshift('SQL')
// techs.shift()

// let index = techs.slice(0, 5)

// let index = techs.indexOf('Git')
// techs.splice(-3, 1)
// console.log(techs.splice(index, 1))
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


nums = [2, "2", 2, 1, 5, 19, 10]
console.log(nums.sort((a, b) => a -b))
console.log(techs.sort())

// console.log(index)