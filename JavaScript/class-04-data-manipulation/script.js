// >>>> Data Manipulation <<<< 

// Prototype (Chain) 
// console.log('Emanuel'.__proto__)
// console.log(10.0.__proto__)


// >>>> String <<<<

// let myName = 'Emanuel'
// let num = 53.34234
// let phrase = 'Emanuel sou Web Developer'

// console.log(myName.length)
// console.log(String(num).length)

// console.log(myName.toLocaleUpperCase())

// console.log(typeof phrase.split(' ')[2])
// console.log(typeof phrase.split(' ').join("-"))

// console.log(phrase.includes('web')) //case-sensitive
// console.log(phrase.toLocaleLowerCase().includes('web'))


// >>>> Number Manipulation <<<<

let num1 = 7.5
let num2 = -5

// console.log(num1)
// console.log(Math.sqrt(81))
// console.log(Math.PI)
// console.log(Math.abs(num2))

console.log(Math.max(12, 34, 4, 98, 32, 56 ,178 ,12, 43, 65))
console.log(Math.min(12, 34, 4, 98, 32, 56 ,178 ,12, 43, 65))

// console.log(Math.ceil(num1))
// console.log(Math.round(num1))
// console.log(Math.floor(num1))

// console.log(Math.round(Math.random()*2))

// let mega = []

// for(let i=0; i<6; i++) {
//     mega[i] = Math.ceil(Math.random()*60)
// }

// console.log(mega)



// console.log(typeof Number(num.toFixed(2)))
// console.log(Number(num.toFixed(2).replace(".", ",")))
// console.log(typeof num.toFixed(2).replace(".", ","))

// Convert Currency
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})) 
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'usd'}))
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'eur'})) 
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'jpy'})) 

// International Standard Currency Code ISO 4217

// let cpf = 32165498758
// console.log(cpf + 2)
// console.log(String(cpf))
// console.log(cpf + 2) //fez o coercion
// console.log(String(cpf) + 2) //com o conversion


// >>>> Date Manipulation <<<<
data = new Date()
// console.log(data.getDate())


// >>>> Array Manipulation <<<<

// let myArray = Array(1, "a", () => "A" )
// console.log(myArray[2]())

let techs = ['HTML', 'CSS', 'Git']

// techs.push('JavaScript')
// techs.pop()
// techs.unshift('SQL')
// techs.shift()

let index = techs.slice(0, 1)

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

// console.log(techs)
// console.log(index)